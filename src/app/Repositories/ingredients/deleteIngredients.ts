import { Request, Response } from "express";

import { Ingredients } from "../../models/Ingredients";

export const deleteIngredients = async (req: Request, res: Response) => {
  try {
    const { ingredientId } = req.params;
    await Ingredients.findByIdAndDelete(ingredientId);

    res.status(200).json({ deleted: true });
  } catch (err) {
    res.status(500).json({
      error: true,
      message: "Ocorreu um erro ao tentar deletar um ingrediente.",
    });
  }
};
