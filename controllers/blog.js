const prisma = require("../config/prisma");
const fs = require("fs");

exports.createBlog = async (req, res) => {
  try {
    const { name, description } = req.body;

    const blog = await prisma.blog.create({
      data: {
        name: name,
        description: description,
        image: req.file.filename,
      },
    });

    res.status(200).json(blog);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.listBlog = async (req, res) => {
  try {
    const blog = await prisma.blog.findMany();

    res.status(200).json(blog);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.readBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await prisma.blog.findFirst({
      where: {
        id: Number(id),
      },
    });

    res.status(200).json(blog);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, imageOld } = req.body;/* ส่งรูปเก่ามาด้วย(imageOld) */

    const newData = {
      name: name,
      description: description,
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
    const blog = await prisma.blog.update({
      where: {
        id: parseInt(id),
      },
      data: newData,
    });

    res.status(200).json(blog);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await prisma.blog.delete({
      where: {
        id: Number(id),
      },
    });

    await fs.unlink(`./public/uploads/${blog.image}`, (err) => {
      if (err) {
        console.log("Delete Image fail!", err);
      } else {
        console.log("Delete Image(Server) Success!");
      }
    });

    res.status(200).json(blog);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};
