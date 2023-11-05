import { Request, Response } from "express";

import { Category } from "../../models/Category";

export const deleteCategoryById = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
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
