const prisma = require("../config/prisma");

exports.addCart = async (req, res) => {
  try {
    const { id } = req.user;
    const { productId, quantity, price } = req.body;

    //New-wishlist
    const newCart = await prisma.cart.create({
      data: {
        userId: parseInt(id),
        productId: parseInt(productId),
        quantity: parseInt(quantity),
        price: parseInt(price),
      },
    });

    res.status(200).json(newCart);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.listCart = async (req, res) => {
  try {
    const { id } = req.user;

    const cart = await prisma.cart.findMany({
      where: {
        userId: parseInt(id),
      },
      include: {
        product: true,
      },
    });

    res.status(200).json(cart);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.readCart = async (req, res) => {
  try {
    const { id } = req.user;
    const { cartId } = req.params

    const cart = await prisma.cart.findFirst({
      where: {
        id: cartId,
      },
      include: {
        product: true,
      },
    });

    res.status(200).json(cart);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const { id } = req.user;
    const { cartId, productId, quantity, price } = req.body;

    const cart = await prisma.cart.update({
      where: {
        id: parseInt(cartId),
      },
      data: {
        userId: parseInt(id),
        productId: parseInt(productId),
        quantity: parseInt(quantity),
        price: parseInt(price),
      },
    });

    res.status(200).json(cart);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.removeCart = async (req, res) => {
  try {
    const { id } = req.user;
    const { cartId } = req.params;

    //remove cart to DB
    const cart = await prisma.cart.delete({
      where: {
        id: parseInt(cartId),
      },
    });

    res.status(200).json(cart);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};
