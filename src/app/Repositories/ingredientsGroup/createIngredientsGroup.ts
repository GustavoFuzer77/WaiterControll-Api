import { Request, Response } from "express";
import { IngredientGroup } from "../../models/IngredientsGroup";

export const createIngredientsGroup = async (req: Request, res: Response) => {
  try {
    const { name, ingredients } = req.body;

    const group = await IngredientGroup.create({ name, ingredients });

    res.status(201).json(group);
  } catch (er) {
    res.status(500).json({
      error: true,
      message: "Ocorreu um erro ao tentar criar um grupo.",
    });
  }
};
