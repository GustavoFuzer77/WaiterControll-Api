/* eslint-disable @typescript-eslint/no-unused-vars */

import { Request, Response } from "express";
import { createIngredient } from "../Repositories/ingredients/createIngredient";
import { listIngredient } from "../Repositories/ingredients/listIngredient";
import { deleteIngredients } from "../Repositories/ingredients/deleteIngredients";

type IngredientController = {
  store: (req: Request, res: Response) => void;
  index: (req: Request, res: Response) => void;
  show: (req: Request, res: Response) => void;
  remove: (req: Request, res: Response) => void;
  update: (req: Request, res: Response) => void;
};

export const ingredientController: IngredientController = {
  store: (req, res) => {
    createIngredient(req, res);
  },
  index: (req, res) => {
    listIngredient(req, res);
  },
  show: (req, res) => {
    // listProductByCategoryId(req, res);
  },
  remove: (req, res) => {
    deleteIngredients(req, res);
  },
  update: (req, res) => {},
};
