import { Request, Response } from "express";

import { Ingredients } from "../../models/Ingredients";

export const listIngredient = async (req: Request, res: Response) => {
  try {
    const ingredients = await Ingredients.find();
    res.status(200).json(ingredients);
  } catch (err) {
    res.status(500).json({
      error: true,
      message: "Ocorreu um erro ao tentar procurar por categorias.",
    });
  }
};
