import { Request, Response } from "express";

import { IngredientGroup } from "../../models/IngredientsGroup";

export const listGroups = async (req: Request, res: Response) => {
  try {
    const groups = await IngredientGroup.find()
      .sort({ createdAt: 1 })
      .populate({
        path: "ingredients.ingredient",
      });

    const filteredGroups = groups.map((group) => {
      console.log(group.ingredients, "???");

      const filteredIngredients = group.ingredients.filter(
        (ingredient) => ingredient.ingredient !== null
      );

      return {
        _id: group._id,
        name: group.name,
        ingredients: filteredIngredients,
        createdAt: group.createdAt,
      };
    });

    res.status(200).json(filteredGroups);
  } catch (err) {
    res.status(500).json({
      error: true,
      message: "Ocorreu um erro ao tentar procurar por grupos.",
    });
  }
};
