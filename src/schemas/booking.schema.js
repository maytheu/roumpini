export const bookingTypeDef = /* GraphQL */ `
  type Query {
    bookings: [Booking!]!
    booking(id: String!): Booking
  }

  type Mutation {
    newBooking(data: NewBookingInput!): Booking
    updateBooking(data: UpdateBookingInput): Booking
  }

  type Booking {
    id: String!
    dateTime: String
    location: String
    status: BookingStatus
    note: String
    serviceType: ServiceType
  }

  input NewBookingInput {
    dateTime: String!
    location: String!
    note: String
    serviceType: ServiceType!
  }

  input UpdateBookingInput {
    id: String!
    dateTime: String
    location: String
    status: BookingStatus
    note: String
    serviceType: ServiceType
  }

  enum BookingStatus {
    Pending
    Confirmed
    Cancelled
    Completed
  }

  enum ServiceType {
    MedicalConsultation
    PhysicalTherapySession
  }
`;
