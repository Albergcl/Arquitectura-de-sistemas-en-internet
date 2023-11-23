import mongoose from "npm:mongoose@8.0.1";

const Schema = mongoose.Schema;

const clientSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phoneNumber: {type: Number, unique: true },
        DNI: { type: String, required: true, unique: true },
        bookings: { type: Schema.Types.ObjectId, ref: "Booking" }
    },
    { timestamps: true}
);