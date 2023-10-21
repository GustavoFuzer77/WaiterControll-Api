import { Request, Response } from "express";

import { IngredientGroup } from "../../models/IngredientsGroup";

export const listGroups = async (req: Request, res: Response) => {
  try {
    const groups = await IngredientGroup.find()
      .sort({ createdAt: 1 })
      .populate({path: "ingredients.ingredient"});

    res.status(200).json(groups);
  } catch (err) {
    res.status(500).json({
      error: true,
      message: "Ocorreu um erro ao tentar procurar por grupos.",
    });
  }
};
