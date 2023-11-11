import { Request, Response } from "express";

import { Category } from "../../models/Category";
import { Product } from "../../models/Product";

export const deleteCategoryById = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;

    const existProductBond = await Product.findOne({
      "categoryId": categoryId,
    });


    if(existProductBond){
      return res.status(400).json({
        error: true,
        message: "Ocorreu um erro ao tentar deletar uma categoria, pois ele esta vinculado á um produto.",
      });
    }


    await Category.findByIdAndDelete(categoryId);



    res.status(200).json({ deleted: true });
  } catch (er) {
    res
      .status(400)
      .json({
        error: true,
        message: "Ocorreu um erro ao tentar deletar uma categoria.",
      });
  }
};
