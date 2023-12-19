import { Request, Response } from "express";

import { IngredientGroup } from "../../models/IngredientsGroup";
import { Product } from "../../models/Product";

export const deleteIngredientsGroups = async (req: Request, res: Response) => {
  try {
    const { ingredientId } = req.params;

    const existProductBond = await Product.findOne({
      "ingredients.ingredient": ingredientId,
    });


    if(existProductBond){
      return res.status(400).json({
        error: true,
        message: "Ocorreu um erro ao tentar deletar uma categoria, pois ele esta vinculado á um produto.",
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
