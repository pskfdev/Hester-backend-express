exports.createProduct = async (req, res) => {
  try {
    //Code

    res.status(200).json({ message: "Hello create Product!" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.listProduct = async (req, res) => {
  try {
    //Code

    res.status(200).json({ message: "Hello list Product!" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.readProduct = async (req, res) => {
  try {
    //Code

    res.status(200).json({ message: "Hello read Product!" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    //Code

    res.status(200).json({ message: "Hello update Product!" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    //Code

    res.status(200).json({ message: "Hello delete Product!" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};
