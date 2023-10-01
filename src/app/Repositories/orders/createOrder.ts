import { Request, Response } from "express";
import { Order } from "../../models/Order";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { table, products } = req.body;

    const order = await Order.create({ table, products });

    res.status(201).json({ order });
  } catch (er) {
    res
      .status(500)
      .json({
        error: true,
        message: "Ocorreu um erro ao tentar criar um pedido.",
      });
  }
};
