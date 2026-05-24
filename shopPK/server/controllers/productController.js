const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find().populate("createdBy", "name email");
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock, image } = req.body;
    const productCreated = await Product.create({
      name,
      description,
      price,
      category,
      stock,
      image,
      createdBy: req.user._id,
    });
    res
      .status(201)
      .json({ message: "Product created!", product: productCreated });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }

    res.status(200).json({ message: "Product is updated", product: product });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }
    res
      .status(200)
      .json({ message: "Product is deleted", deleteProduct: product });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
