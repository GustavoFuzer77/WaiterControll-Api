/* eslint-disable @typescript-eslint/no-unused-vars */

import { Request, Response } from "express";

import { listCategories } from "../Repositories/categories/listCategories";
import { createCategory } from "../Repositories/categories/createCategory";
import { listProductByCategoryId } from "../Repositories/categories/listProductByCategoryId";
import { deleteCategoryById } from "../Repositories/categories/deleteCategory";

type CategoryController = {
  store: (req: Request, res: Response) => void;
  index: (req: Request, res: Response) => void;
  show: (req: Request, res: Response) => void;
  remove: (req: Request, res: Response) => void;
  update: (req: Request, res: Response) => void;
};

export const categoryController: CategoryController = {
  store: (req, res) => {
    createCategory(req,res)
  },
  index: (req, res) => {
    listCategories(req, res)
  },
  show: (req, res) => {
    listProductByCategoryId(req, res)
  },
  remove: (req, res) => {
    deleteCategoryById(req, res)
  },
  update: (req, res) => {},
};
