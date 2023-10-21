import { Request, Response } from "express";

import { Order } from "../../models/Order";

export const changeOrder = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!["WAITING", "IN_PRODUCTION", "DONE"].includes(status)) {
      return res
        .status(400)
        .json({ error: true, message: "parâmetro inválido." });
    }

    await Order.findByIdAndUpdate(orderId, { status });
    res.status(200).json({updated: true});
  } catch (err) {
    res.status(500).json({
      error: true,
      message: "Ocorreu um erro ao tentar procurar por pedidos.",
    });
  }
};
