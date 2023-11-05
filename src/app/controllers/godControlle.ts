/* eslint-disable @typescript-eslint/no-unused-vars */

import { Request, Response } from "express";
import { IngredientGroup } from "../models/IngredientsGroup";
import { Category } from "../models/Category";
import { Ingredients } from "../models/Ingredients";
import { Order } from "../models/Order";
import { Product } from "../models/Product";
import fs from "fs";
import path from "path";

type GodController = {
  store: (req: Request, res: Response) => void;
  index: (req: Request, res: Response) => void;
  show: (req: Request, res: Response) => void;
  remove: (req: Request, res: Response) => void;
  update: (req: Request, res: Response) => void;
};

export const godController: GodController = {
  store: (req, res) => {},
  index: (req, res) => {},
  show: (req, res) => {},
  remove: async (req, res) => {
    await IngredientGroup.deleteMany({});
    await Category.deleteMany({});
    await Ingredients.deleteMany({});
    await Order.deleteMany({});
    await Product.deleteMany({});

    const directory = path.join(__dirname, "..", "..", "..", "uploads");

    const deleteFilesInFolder = (folderPath: string) => {
      fs.readdir(folderPath, (err, files) => {
        if (err) {
          console.error("Erro ao ler a pasta:", err);
          return;
        }

        for (const file of files) {
          fs.unlink(path.join(folderPath, file), (error) => {
            if (error) {
              console.error(`Erro ao excluir o arquivo ${file}:`, error);
            } else {
              console.log(`Arquivo ${file} excluído com sucesso.`);
            }
          });
        }
      });
    };

    deleteFilesInFolder(directory);

    res.status(200).json({ deleted: "EVERYTHING IS GONE" });
  },
  update: (req, res) => {},
};
