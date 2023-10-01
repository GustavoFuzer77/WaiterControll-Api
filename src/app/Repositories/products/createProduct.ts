import { Request, Response } from "express";

import { Product } from "../../models/Product";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const imagePath = req.file?.filename
    const {name, description, price, categoryId, ingredients} = req.body;

    const product = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      categoryId,
      ingredients: ingredients ? JSON.parse(ingredients) : []
    })
    res.status(201).json({product})
  } catch (er) {
    res.status(500).json({
      error: true,
      message: "Ocorreu um erro ao tentar criar um produto.",
    });
  }
};
