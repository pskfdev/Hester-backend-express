exports.userCheck = async (req, res) => {
  try {
    //Code

    console.log("Token User!");

    next();
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.adminCheck = async (req, res) => {
  try {
    //Code

    console.log("Token Admin!");

    next();
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};
