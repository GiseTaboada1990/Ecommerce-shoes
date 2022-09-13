const { Product, Brand, Category, Size } = require('../db');
const { Op } = require('sequelize');
const { getAllProducts } = require('.');

async function getByName(name) {
    try {
        const nameSearch = await Product.findAll({
            where: {[Op.or]:[{ 
              title: { [Op.iLike]: `%${name}%` }},
              {id: { [Op.iLike]: `%${name}%` }},
            ]},
            include: [
              { model: Brand },
              { model: Category },
              { model: Size, where:{isActive:true}}
            ]
          })
    
        if (!nameSearch.length) throw new Error(`El nombre '${name}' no arrojo ningun resultado`)
          
        return nameSearch
    } catch (error) {
        throw error
    }
}

async function getByBrand(brand) {
    try {
        const results = await Product.findAll({
          where:{isActive:true},
          include: [
            { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } } },
            { model: Category },
            { model: Size, where:{isActive:true}}
          ]
        })
        return results

      } catch (error) {
        throw error
      }
}

async function getByCategory(category) {
    try {
        const results = await Product.findAll({
          where:{isActive:true},
          include: [
            { model: Brand },
            { model: Category, where: { name: { [Op.iLike]: `%${category}%` } } },
            { model: Size, where:{isActive:true}}
          ]
        })
        
        return results
      } catch (error) {
        throw error
      }
}

async function getByPrice(priceMin, priceMax) {
    try {
        const results = await Product.findAll({
          where: {[Op.and]:[   
            {isActive:true},
            {price: {
              [Op.and]: [
                { [Op.gte]: priceMin ? priceMin : 0 }, // Precio sea mayor o igual a precio minimo
                { [Op.lte]: priceMax } // Precio sea menor o igual a precio maximo
              ]
            }
          }]},
          include: [
            { model: Brand },
            { model: Category },
            { model: Size, where:{isActive:true}}
          ]
        })
        results.sort((a, b) => b.price - a.price) // ordeno precio de mayor a menor
        
        return results

      } catch (error) {
        console.log(error);
        throw error
      }
}

async function getBySize(size) {
  try {
    const all = await Product.findAll({
      where:{isActive:true},
      include: [
        { model: Brand },
        { model: Category },
        { model: Size, where:{[Op.and]:[{ number: size },{isActive:true}]}},
      ]
    })
    return all

  } catch (error) {
    throw error
  }
}

async function getAll() {
    try {
      let result =  await Product.findAll({
        where:{isActive:true},
        include: [
          { model: Brand },
          { model: Category },
          { model: Size, where:{isActive:true}},
        ]
      })
       if(result.length){
         return result
      }
        else{
           let data =await getAllProducts()
           return data
        }
      } catch (error) {
        throw error
      }
}

module.exports = {
    getByName,
    getByBrand,
    getByCategory,
    getByPrice,
    getBySize,
    getAll
}