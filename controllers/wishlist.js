const prisma = require("../config/prisma");

//Create wishlist
exports.addWishlist = async (req, res) => {
  try {
    const { id } = req.user;
    const { productId } = req.body;

    //New-wishlist
    const newWishlist = await prisma.wishlist.create({
      data: {
        productId: parseInt(productId),
        userId: parseInt(id),
      },
    });

    res.status(200).json(newWishlist);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

//Get wishlist
exports.listWishlist = async (req, res) => {
  try {
    const { id } = req.user;

    const wishlist = await prisma.wishlist.findMany({
      where: {
        userId: parseInt(id),
      },
      include: {
        product: true,
      },
    });

    res.status(200).json(wishlist);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

//Remove wishlist
exports.removeWishlist = async (req, res) => {
  try {
    const { id } = req.user;
    const { wishlistId } = req.body;

    //remove wishlist to DB
    const wishlist = await prisma.wishlist.delete({
      where: {
        id: parseInt(wishlistId),
      },
    });

    res.status(200).json(wishlist);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};
