/* eslint-disable @typescript-eslint/no-unused-vars */

import { Request, Response } from "express";
import { createIngredientsGroup } from "../Repositories/ingredientsGroup/createIngredientsGroup";
import { listGroups } from "../Repositories/ingredientsGroup/listIngredientsGroup";

type ingredientGroupController = {
  store: (req: Request, res: Response) => void;
  index: (req: Request, res: Response) => void;
  show: (req: Request, res: Response) => void;
  remove: (req: Request, res: Response) => void;
  update: (req: Request, res: Response) => void;
};

export const ingredientGroupController: ingredientGroupController = {
  store: (req, res) => {
    createIngredientsGroup(req, res);
  },
  index: (req, res) => {
    listGroups(req, res);
  },
  show: (req, res) => {
    // listProductByCategoryId(req, res);
  },
  remove: (req, res) => {},
  update: (req, res) => {},
};
