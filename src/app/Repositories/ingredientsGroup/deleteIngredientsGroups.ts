import { Request, Response } from "express";

import { IngredientGroup } from "../../models/IngredientsGroup";
import { Product } from "../../models/Product";

export const deleteIngredientsGroups = async (req: Request, res: Response) => {
  try {
    const { ingredientId } = req.params;

    const existIngredientBond = await Product.findOne({
      "ingredients.ingredient": ingredientId,
    });


    if(existIngredientBond){
      return res.status(400).json({
        error: true,
        message: "Ocorreu um erro ao tentar deletar um ingrediente, pois ele esta vinculado á um grupo.",
      });
    }
    await IngredientGroup.findByIdAndDelete(ingredientId);

    res.status(200).json({ deleted: true });
  } catch (err) {
    res.status(500).json({
      error: true,
      message: "Ocorreu um erro ao tentar deletar um grupo de ingrediente.",
    });
  }
};
