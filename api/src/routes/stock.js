const { Router } = require("express");
const { Product, Size, Order } = require("../db");
const { Op } = require("sequelize")
const router = Router();

const stock = async (idOrden) => {

  try {
    const order = await Order.findByPk(idOrden, { include: [{ all: true }] })
    console.log(order,'order')
    const idsOfProducts = order.detailsOrders.map(product => product.product_id)
    const soldProducts = []

    for (let i = 0; i < idsOfProducts.length; i++) {
      const productCopy = await Product.findOne({
        where: { id: idsOfProducts[i] }, 
        include: [{ model: Size, where: { number: { [Op.or]: order.detailsOrders[i].sizes_sold } } }]
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

      soldProducts.push(productCopy);
    }

    return soldProducts

  } catch (error) {
    console.log(error)
    throw error
  }
}

module.exports = { stock }