import { Request, Response } from "express";
import { createProduct } from "../Repositories/products/createProduct";
import { listProducts } from "../Repositories/products/listProducts";
import { deleteProduct } from "../Repositories/products/deleteProduct";

/* eslint-disable @typescript-eslint/no-unused-vars */
type ProductController = {
  store: (req: Request, res: Response) => void;
  index: (req: Request, res: Response) => void;
  show: (req: Request, res: Response) => void;
  remove: (req: Request, res: Response) => void;
  update: (req: Request, res: Response) => void;
};

export const productController: ProductController = {
  store: (req, res) => {
    createProduct(req, res);
  },
  index: (req, res) => {
    listProducts(req, res);
  },
  show: (req, res) => {},
  remove: (req, res) => {
    deleteProduct(req, res);
  },
  update: (req, res) => {},
};
