const prisma = require('../config/prisma')

exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const category = await prisma.category.create({
      data: {
        name: name,
      },
    });

    res.status(200).json(category);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.listCategory = async (req, res) => {
  try {
    const categorys = await prisma.category.findMany();

    res.status(200).json(categorys);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.readCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await prisma.category.findFirst({
      where: {
        id: Number(id),
      },
    });

    res.status(200).json(category);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const category = await prisma.category.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name: name,
      },
    });

    res.status(200).json(category);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await prisma.category.delete({
      where: {
        id: Number(id),
      },
    });

    res.status(200).json(category);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};
