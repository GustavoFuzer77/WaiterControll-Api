import { Request, Response } from "express";

import { Category } from "../../models/Category";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const icon = req.file?.filename

    const category = await Category.create({ name, icon });
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
