import { Request, Response } from "express";

import { Product } from "../../models/Product";

export const listProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json({
      error: true,
      message: "Ocorreu um erro ao tentar procurar por produtos.",
    });
  }
};
