import { Request, Response } from "express";

import { Ingredients } from "../../models/Ingredients";

export const createIngredient = async (req: Request, res: Response) => {
  try {
    const icon = req.file?.filename
    const { name } = req.body;

    const ingredient = await Ingredients.create({ icon, name });
    res.status(201).json(ingredient);
  } catch (er) {
    res
      .status(500)
      .json({
        error: true,
        message: "Ocorreu um erro ao tentar criar um ingrediente.",
      });
  }
};
