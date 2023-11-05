import { Schema, model } from "mongoose";
import { IngredientGroup } from "./IngredientsGroup";

const ingredientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

export const Ingredients = model("Ingredients", ingredientSchema);
