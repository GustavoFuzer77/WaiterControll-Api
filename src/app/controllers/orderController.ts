import { CancelOrder } from "../Repositories/orders/CancelOrder";
import { changeOrder } from "../Repositories/orders/changeOrder";
import { createOrder } from "../Repositories/orders/createOrder";
import { listOrders } from "../Repositories/orders/listOrders";
import { Request, Response } from "express";

/* eslint-disable @typescript-eslint/no-unused-vars */
type OrderController = {
  store: (req: Request, res: Response) => void;
  index: (req: Request, res: Response) => void;
  show: (req: Request, res: Response) => void;
  remove: (req: Request, res: Response) => void;
  update: (req: Request, res: Response) => void;
};

export const orderController: OrderController = {
  store: (req, res) => {
    createOrder(req, res);
  },
  index: (req, res) => {
    listOrders(req, res);
  },
  show: (req, res) => {},
  remove: (req, res) => {
    CancelOrder(req,res)
  },
  update: (req, res) => {
    changeOrder(req, res);
  },
};
