const prisma = require("../config/prisma");
const jwt = require("jsonwebtoken");

exports.userCheck = async (req, res, next) => {
  try {
    const headerToken = req.headers.authorization;
    

    if (!headerToken) {
      return res.status(401).json({ message: "No Token, Authorization!" });
    }

    //แยก Bearer ออกจาก Token ที่ส่งมา
    const token = headerToken.split(" ")[1];

    //ถอดรหัส token เป็นข้อมูล(data)
    const decode = jwt.verify(token, process.env.SECRET);

    //เพิ่ม property user=decode เข้าไปใน object req
    req.user = decode;

    //ค้นหา Username ที่ได้จากการ decode ไปค้นหาใน DB
    const user = await prisma.user.findFirst({
      where: {
        username: req.user.username,
      },
    });

    if (!user) {
      return res.status(401).json({ message: "User not found!" });
    }

    next();
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Token Invalid!" });
  }
};

exports.adminCheck = async (req, res, next) => {
  try {
    const { username, role } = req.user;

    console.log(username, role);
    

    //Check ว่ามี user นี้ไหม และ user นี้เป็น role="admin" ไหม
    if (!username || role !== "admin") {
      return res.status(403).json({ message: "Error access denied: Admin only!" });
    }

    next();
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Error Admin access denied!" });
  }
};
