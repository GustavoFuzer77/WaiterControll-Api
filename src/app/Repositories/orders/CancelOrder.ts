import { Request, Response } from "express";
import { Order } from "../../models/Order";

export const CancelOrder = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    await Order.findByIdAndDelete(orderId);

    res.status(200).json({ deleted: true });
  } catch (er) {
    res.status(500).json({
      error: true,
      message: "Ocorreu um erro ao tentar criar um pedido.",
    });
  }
};
