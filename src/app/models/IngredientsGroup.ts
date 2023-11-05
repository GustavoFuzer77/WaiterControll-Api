import { Schema, model } from "mongoose";
import { Ingredients } from "./Ingredients";

const ingredientGroupSchema = new Schema({
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
});

export const IngredientGroup = model("IngredientGroup", ingredientGroupSchema);
