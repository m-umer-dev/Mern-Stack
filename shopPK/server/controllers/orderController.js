const Order = require("../models/Order");

const createOrder = async (req, res) => {
  try {
    const { orderItems, totalPrice, address } = req.body;
    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: "No order items!" });
    }
    const order = await Order.create({
      user: req.user._id,
      orderItems,
      totalPrice,
      address,
    });
    return res.status(201).json({ message: "Order created!", order });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getMyOrders = async (req, res) => {
  try {
    const order = await Order.find({ user: req.user._id }).populate(
      "orderItems.product",
      "name price image",
    );
    return res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const order = await Order.find()
      .populate("user", "name email")
      .populate("orderItems.product", "name price image");
    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const markAsPaid = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ message: "No order items!" });
    }
    order.isPaid = true;
    await order.save();
    return res.status(200).json({ message: "Order marked as paid!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { createOrder, getMyOrders, getAllOrders, markAsPaid };
