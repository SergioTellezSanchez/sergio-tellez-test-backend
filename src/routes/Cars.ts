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
    carModel: {
      type: String,
      required: true,
      trim: true,
    },
  estimatedDate: {
      type: Date,
      trim: true,
    },
    carId: {
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
      type: Boolean
    },
    personalData: {
      ownerName: {
        type: String,
        trim: true,
      },
      ownerNumber: {
        type: Number,
        trim: true,
      },
      ownerAddress: {
        type: String,
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
