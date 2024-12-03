const prisma = require('../config/prisma')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
  try {
    const { username, password, name } = req.body

    if (!username || !password) {
      res.status(400).json({ message: "Email and Password is required!" });
    }

    //Check Email in DB
    const user = await prisma.user.findFirst({
      where: {
        username: username,
      },
    });
    if (user) {
      return res.status(400).json({ message: "User already exits!" });
    }

    //Hash-Password
    const hashPassword = await bcrypt.hash(password, 10);

    //Create to DB
    await prisma.user.create({
      data: {
        username: username,
        password: hashPassword,
        name: name
      },
    });

    res.status(200).json({ message: "Register success." });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Email and Password is required!" });
    }

    //Check Email in DB
    const user = await prisma.user.findFirst({
      where: {
        username: username,
      },
    });
    if (!user) {
      return res.status(400).json({ message: "User not found!" });
    }

    //Check Password in DB by bcrypt.compare
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Password Invalid!" });
    }

    //Create payload and Generate Token
    const payload = {
      id: user.id,
      username: user.username,
      role: user.role,
      name: user.name
    };
    jwt.sign(
      payload,
      process.env.SECRET,
      { expiresIn: "15d" },
      (err, token) => {
        
        if (err) {
          return res.status(500).json({ message: "Server Error!" });
        }

        res.status(200).json({ payload, token });
      }
    );

  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.currentUser = async (req, res) => {
  try {
    //Code

    res.status(200).json({ message: "Hello current User!" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.currentAdmin = async (req, res) => {
  try {
    //Code

    res.status(200).json({ message: "Hello current Admin!" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};
