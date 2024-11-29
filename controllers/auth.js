

exports.register = async (req, res) => {
  try {
    //Code

    res.status(200).json({ message: "Hello Register!" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.login = async (req, res) => {
    try {
      //Code
  
      res.status(200).json({ message: "Hello Login!" });
    } catch (err) {
      console.log("Err", err);
      res.status(500).json({ message: "Server Error!" });
    }
  };
