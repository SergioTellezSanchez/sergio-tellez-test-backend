import { Schema, model } from "mongoose";

const carSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
    maker: {
      type: String,
      required: true,
      trim: true,
    },
    car_model: {
      type: String,
      required: true,
      trim: true,
    },
    estimated_date: {
      type: String,
      required: true,
      trim: true,
    },
    id: {
      type: Number,
      required: true,
      trim: true,
    },
    km: {
      type: Number,
      required: true,
      trim: true,
    },
    onMaintenance: {
      type: Boolean,
      required: true,
    },
    personalData: {
      ownerName: {
        type: String,
        required: true,
        trim: true,
      },
      ownerNumber: {
        type: Number,
        required: true,
        trim: true,
      },
      ownerAddress: {
        type: String,
        required: true,
        trim: true,
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("Cars", carSchema);
