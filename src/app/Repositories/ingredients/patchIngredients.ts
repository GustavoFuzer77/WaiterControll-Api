import { Request, Response } from "express";

import { Ingredients } from "../../models/Ingredients";

export const patchIngredients = async (req: Request, res: Response) => {
  try {
    const { ingredientId } = req.params;
    const { name } = req.body;
    const icon = req.file?.filename;

    console.log(name, icon)

    const ingredientUpdated = await Ingredients.findByIdAndUpdate(
      ingredientId,
      { name, icon }
    );

    res.status(201).json(ingredientUpdated);
  } catch (err) {
    res.status(500).json({
      error: true,
      message: "Ocorreu um erro ao atualizar os ingredientes.",
    });
  }
};
