const prisma = require("../config/prisma");
const fs = require("fs");

exports.createProduct = async (req, res) => {
  try {
    const { title, description, price, categoryId } = req.body;

    const product = await prisma.product.create({
      data: {
        title: title,
        description: description,
        price: parseInt(price),
        categoryId: parseInt(categoryId),
        image: req.file.filename,
      },
    });

    res.status(200).json(product);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.listProduct = async (req, res) => {
  try {
    const product = await prisma.product.findMany({
      include: {
        category: true,
      },
    });

    res.status(200).json(product);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.readProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await prisma.product.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        category: true,
      },
    });

    res.status(200).json(product);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price, categoryId, imageOld } = req.body;

    const newData = {
      title: title,
      description: description,
      price: parseInt(price),
      categoryId: parseInt(categoryId),
      image: imageOld,
    };

    //check upload image
    //ถ้ามีการอัปรูปใหม่ จะเข้า middleware upload และทำคำสั่งภายใน if
    if (typeof req.file != "undefined") {
      newData.image = req.file.filename; /* filename มาจาก middleware upload */

      await fs.unlink(`./public/uploads/${imageOld}`, (err) => {
        if (err) {
          console.log("Delete Image fail!", err);
        } else {
          console.log("Delete Image(Server) Success!");
        }
      });
    }

    //Update to db
    const product = await prisma.product.update({
      where: {
        id: parseInt(id),
      },
      data: newData,
    });

    res.status(200).json(product);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await prisma.product.delete({
      where: {
        id: Number(id),
      },
    });

    await fs.unlink(`./public/uploads/${product.image}`, (err) => {
      if (err) {
        console.log("Delete Image fail!", err);
      } else {
        console.log("Delete Image(Server) Success!");
      }
    });

    res.status(200).json(product);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};
