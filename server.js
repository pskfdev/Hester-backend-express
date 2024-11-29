const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const { readdirSync } = require("fs"); // ใช้ในการอ่าน directory


app.use(morgan("dev")); //ช่วยให้สามารถดูข้อมูลการส่ง req มาได้
app.use(express.json({ limit: "20mb" })); //ช่วยให้ server อ่านข้อมูลที่ส่งมาแบบ json ได้ และกำหนดขนาดในการรับส่งข้อมูล
app.use(cors()); //อนุญาตให้ติดต่อกันแบบข้ามโดเมนได้ (cross domain)


readdirSync("./routes").map((file) =>
  app.use("/api", require(`./routes/${file}`))
);


app.listen(5000, () => console.log("Server is running on port 5000"));