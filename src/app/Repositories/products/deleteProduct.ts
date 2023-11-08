import { Request, Response } from "express";

import { Product } from "../../models/Product";

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await Product.findByIdAndDelete(id);

    res.status(200).json({ deleted: true });
  } catch (err) {
    res.status(500).json({
      error: true,
      message: "Ocorreu um erro ao tentar deletar o produto.",
    });
  }
};
