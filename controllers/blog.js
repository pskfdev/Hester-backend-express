exports.createBlog = async (req, res) => {
  try {
    //Code

    res.status(200).json({ message: "Hello create blog!" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.listBlog = async (req, res) => {
  try {
    //Code

    res.status(200).json({ message: "Hello list blog!" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.readBlog = async (req, res) => {
  try {
    //Code

    res.status(200).json({ message: "Hello read Blog!" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    //Code

    res.status(200).json({ message: "Hello update Blog!" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    //Code

    res.status(200).json({ message: "Hello delete Blog!" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};
