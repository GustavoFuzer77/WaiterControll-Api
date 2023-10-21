import { Schema, model } from "mongoose";

export const IngredientGroup = model(
  "IngredientGroup",
  new Schema({
    name: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    ingredients: {
      required: true,
      type: [
        {
          ingredient: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Ingredients",
          },
        },
      ],
    },
  })
);
