import { Request, Response } from "express";

import { Ingredients } from "../../models/Ingredients";
import { IngredientGroup } from "../../models/IngredientsGroup";


export const deleteIngredients = async (req: Request, res: Response) => {
  try {
    const { ingredientId } = req.params;

    const existIngredientBond = await IngredientGroup.findOne({
      "ingredients.ingredient": ingredientId,
    });


    if(existIngredientBond){
      return res.status(400).json({
        error: true,
        message: "Ocorreu um erro ao tentar deletar um ingrediente, pois ele esta vinculado á um grupo.",
      });
    }

    await Ingredients.findByIdAndDelete(ingredientId);

    res.status(200).json({ deleted: true });
  } catch (err) {
    res.status(400).json({
      error: true,
      message: "Ocorreu um erro ao tentar deletar um ingrediente.",
    });
  }
};
