export const bookingTypeDef = /* GraphQL */ `
  type Query {
    bookings(params: ParamsInput): [Booking!]!
    booking(id: String!): Booking
  }

  type Mutation {
    newBooking(data: NewBookingInput!): Booking
    updateBooking(data: UpdateBookingInput): Booking
  }

  type Booking {
    id: String!
    date_time: String
    location: String
    status: BookingStatus
    note: String
    service_type: String
  }

  input NewBookingInput {
    dateTime: DateTime!
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

  input ParamsInput {
    page: Int
    limit: Int
  }

  enum BookingStatus {
    Pending
    Confirmed
    Cancelled
    Completed
  }

  enum ServiceType {
    Medical_Consultation
    Physical_Therapy_Session
  }

  scalar DateTime
`;
