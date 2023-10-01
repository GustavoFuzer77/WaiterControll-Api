import { Request, Response } from "express";

import { Category } from "../../models/Category";

export const listCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ categories });
  } catch (err) {
    res.status(500).json({
      error: true,
      message: "Ocorreu um erro ao tentar procurar por categorias.",
    });
  }
};
