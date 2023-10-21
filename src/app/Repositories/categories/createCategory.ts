import { Request, Response } from "express";

import { Category } from "../../models/Category";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { icon, name } = req.body;

    const category = await Category.create({ icon, name });
    res.status(201).json(category);
  } catch (er) {
    res
      .status(500)
      .json({
        error: true,
        message: "Ocorreu um erro ao tentar criar uma categoria.",
      });
  }
};
