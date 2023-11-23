import mongoose from "npm:mongoose@8.0.1";

const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
    {
        name: { type: String, required: true, unique: true },
        CIF: { type: String, required: true, unique: true },
        address: { type: String, required: true },
        bookings: { type: Schema.Types.ObjectId, ref: "Booking" }
    },
    { timestamps: true}
);