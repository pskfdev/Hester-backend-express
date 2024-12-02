

exports.listUser = async (req, res) => {
  try {
    //Code

    res.status(200).json({ message: "Hello list User!" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.readUser = async (req, res) => {
  try {
    //Code

    res.status(200).json({ message: "Hello read User!" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    //Code

    res.status(200).json({ message: "Hello delete User!" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};
