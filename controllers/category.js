exports.createCategory = async (req, res) => {
  try {
    //Code

    res.status(200).json({ message: "Hello create Category!" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.listCategory = async (req, res) => {
  try {
    //Code

    res.status(200).json({ message: "Hello list Category!" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.readCategory = async (req, res) => {
  try {
    //Code

    res.status(200).json({ message: "Hello read Category!" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    //Code

    res.status(200).json({ message: "Hello update Category!" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    //Code

    res.status(200).json({ message: "Hello delete Category!" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};
