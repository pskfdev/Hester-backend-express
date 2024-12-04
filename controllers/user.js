const prisma = require('../config/prisma')
const bcrypt = require('bcryptjs')

exports.listUser = async (req, res) => {
  try {
    const user = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        name: true,
        role: true,
      },
    });

    res.status(200).json(user);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.readUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findFirst({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        username: true,
        name: true,
        role: true,
      },
    });

    res.status(200).json(user);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.updateName = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const user = await prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name: name
      },
    });

    res.status(200).json(user);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params

    const user = await prisma.user.delete({
      where: {
        id: Number(id)
      }
    })

    res.status(200).json(user);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.changePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { newPassword } = req.body;

    //Hash-Password
    const hashPassword = await bcrypt.hash(newPassword, 10); //bcrypt.hash(req.body.password, salt)

    await prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        password: hashPassword,
      },
    });

    res.status(200).json({ message: "Change password success" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.changeRole = async (req, res) => {
  try {
    const { id } = req.params
    const { role } = req.body

    await prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        role: role,
      },
    });

    res.status(200).json({ message: "Update role success" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};