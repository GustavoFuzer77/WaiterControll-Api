import { Request, Response } from "express";

import { Product } from "../../models/Product";

export const listProductByCategoryId = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;

    const products = await Product.find()
      .where("categoryId")
      .equals(categoryId);

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({
      error: true,
      message: "Ocorreu um erro ao tentar procurar por categorias.",
    });
  }
};
