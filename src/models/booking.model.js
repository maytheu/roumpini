import { Schema, model } from "mongoose";

const bookingSchema = new Schema({
  patient: { type: Schema.Types.ObjectId, ref: "user" },
  location: { type: String, required: true },
  status: {
    type: String,
    default: "Pending",
    enum: ["Cancelled", "Completed", "Confirmed", "Pending"],
  },
  note: String,
  service_type: {
    type: String,
    required: true,
    enum: ["Medical Consultation", "Physical Therapy Session"],
  },
  date_time: Date,
});

export const Booking = model("booking", bookingSchema);
