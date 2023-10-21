import { Schema, model } from "mongoose";

export const Ingredients = model(
  "Ingredients",
  new Schema({
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  })
);

