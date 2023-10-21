import { Request, Response } from "express";

import { Product } from "../../models/Product";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const imagePath = req.file?.filename
    const {name, description, price, categoryId, ingredients} = req.body;

    const originalData = {
      "ingredients": [
        {
          "ingredient": {
            "_id": "652b1620d62afeda22444094",
            "name": "ingrediente teste ",
            "icon": "1697322528020-persona.png",
            "__v": 0
          },
          "_id": "652b6581c559aa6a930f6c7c"
        }
      ]
    };

    const transformedData = originalData.ingredients.map((item) => ({
      name: item.ingredient.name,
      icon: item.ingredient.icon
    }));


    const product = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      categoryId,
      ingredients: ingredients ? JSON.parse(ingredients) : []
    })
    res.status(201).json(product)
  } catch (er) {
    res.status(500).json({
      error: true,
      message: "Ocorreu um erro ao tentar criar um produto.",
    });
  }
};
