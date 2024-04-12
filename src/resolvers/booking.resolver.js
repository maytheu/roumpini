import { GraphQLError } from "graphql";
import { verifyToken } from "../utils/util.js";
import { Booking } from "../models/booking.model.js";
import { DateTimeType } from "./custom.resolver.js";

export const bookingResolver = {
  Query: {
    bookings: async (_, { params }, ctx) => {
      try {
        const user = verifyToken(ctx);
        const page = params?.page ?? 1;
        const limit = params?.limit ?? 10;
        const skip = (page - 1) * limit;

        return await Booking.find({ patient: user }).skip(skip).limit(limit);
      } catch (error) {
        throw new GraphQLError(error.message);
      }
    },

    booking: async (_, { id }, ctx) => {
      try {
        const user = verifyToken(ctx);
        return await Booking.findOne({ patient: user, id });
      } catch (error) {
        throw new GraphQLError(error.message);
      }
    },
  },

  Mutation: {
    newBooking: async (_, { data }, ctx) => {
      try {
        const user = verifyToken(ctx);
        const { location, note, serviceType, dateTime } = data;
        const service_type =
          serviceType === "Medical_Consultation"
            ? "Medical Consultation"
            : "Physical Therapy Session";
        const newBookingData = new Booking({
          date_time: dateTime,
          location,
          note,
          service_type,
          patient: user,
        });

        await newBookingData.save();

        return { ...newBookingData._doc };
      } catch (error) {
        throw new GraphQLError(error.message);
      }
    },

    updateBooking: async (_, { data }, ctx) => {
      try {
        const user = verifyToken(ctx);
        const booking = await Booking.findById(data.id, "id");
        if (!booking)
          throw new GraphQLError("Booking not found", {
            extensions: { http: { status: 404 } },
          });

        let service_type;
        if (data.serviceType)
          service_type =
            data.serviceType === "Medical_Consultation"
              ? "Medical Consultation"
              : "Physical Therapy Session";
        if (service_type) data.service_type = service_type;

        return await Booking.findByIdAndUpdate(
          data.id,
          { ...data },
          { new: true }
        );
      } catch (error) {
        throw new GraphQLError(error.message);
      }
    },
  },

  DateTime: DateTimeType,
};
