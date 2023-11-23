import mongoose from "npm:mongoose@8.0.1";

const Schema = mongoose.Schema

const bookingSchema = new Schema(
    {
        date: { type: Date },
        clientID: { type: Schema.Types.ObjectId, ref: "Client" },
        restaurantID: { type: Schema.Types.ObjectId, ref: "Restaurant" }
    },
    { timestamps: true}
);