const { Router } = require("express");
const { Product, Size, Order } = require("../db");
const { Op } = require("sequelize")
const router = Router();

router.put("/", async (req, res) => {
  const { idOrden } = req.body

  try {
    const idAll = req.body.cart;
    const order = await Order.findByPk(idOrden, { include: [{ all: true }] })

    let productId = [];
    let sizeId;
    let productArray = [];

    for (let i = 0; i < order.products.length; i++) {
      productId.push(order.products[i].id)
    }

    for (let i = 0; i < productId.length; i++) {
      const productCopy = await Product.findOne({
        where: { id: productId[i] }, 
        include: [{ model: Size, where: { number: { [Op.or]: order.detailsOrders[i].sizeNumber } } }]
      })

      const idSizes = productCopy.sizes.map(s => s.id)

      productCopy.removeSizes(idSizes)

      for (let j = 0; j < productCopy.sizes.length; j++) {
        const newSizes = await Size.create({
          number: productCopy.sizes[j].number,
          stock: productCopy.sizes[j].stock - 1,
          solds: productCopy.sizes[j].solds + 1,
          isActive: productCopy.sizes[j].stock - 1 === 0 ? false : true
        })

        await productCopy.addSize(newSizes)
      }
      await productCopy.save();

      productArray.push(productCopy);
    }

    res.status(200).json(productArray)

  } catch (error) {
    console.log(error)
    res.status(404).json(error)
  }
});




module.exports = router