import { Request, Response } from "express";

import { Order } from "../../models/Order";

export const listOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find()
      .sort({ createdAt: 1 })
      .populate("products.product");

    const filteredGroups = orders.map((orders) => {

      const filteredIngredients = orders.products.filter(
        (elx) => elx.product !== null
      );

      return {
        createdAt: orders.createdAt,
        products: filteredIngredients,
        status: orders.status,
        table: orders.table,
        _id: orders._id,
      };
    });

    res.status(200).json(filteredGroups);
  } catch (err) {
    res.status(500).json({
      error: true,
      message: "Ocorreu um erro ao tentar procurar por pedidos.",
    });
  }
};
