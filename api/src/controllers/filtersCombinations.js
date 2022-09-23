const { Product, Brand, Category, Size } = require('../db');
const { Op } = require('sequelize');


function getAllFilters({ priceMax, priceMin, category, brand, name, size }) {
    let options = {}
    try {
      if (priceMax && priceMin && category && brand && name && size) {
        options = {
          where: {    
            isActive:true,      
            title: { [Op.iLike]: `%${name}%` },
            price: {
              [Op.and]: [
                { [Op.gte]: priceMin ? priceMin : 0 }, // Precio sea mayor o igual a precio minimo
                { [Op.lte]: priceMax } // Precio sea menor o igual a precio maximo
              ],
            }
          },
          include: [
            { model: Size, where:{[Op.and]:[{ number: size },{isActive:true}]}},
            { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } } },
            { model: Category, where: { name: { [Op.iLike]: `%${category}%` } } },
          ]
        }
      }
      else if (priceMax && priceMin && brand && name && size) {
        options = {
          where: {
            isActive:true,
            title: { [Op.iLike]: `%${name}%` },
            price: {
              [Op.and]: [
                { [Op.gte]: priceMin ? priceMin : 0 }, // Precio sea mayor o igual a precio minimo
                { [Op.lte]: priceMax } // Precio sea menor o igual a precio maximo
              ],
            }
          },
          include: [
            { model: Size, where:{[Op.and]:[{ number: size },{isActive:true}]}},
            { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } } },
            { model: Category},
          ]
        }
      }
      else if (priceMax && priceMin && category && brand && name) {
        options = {
          where: {
            title: { [Op.iLike]: `%${name}%` },
            isActive:true,
            price: {
              [Op.and]: [
                { [Op.gte]: priceMin ? priceMin : 0 }, // Precio sea mayor o igual a precio minimo
                { [Op.lte]: priceMax } // Precio sea menor o igual a precio maximo
              ],
            }
          },
          include: [
            { model: Size, where:{isActive:true}},
            { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } } },
            { model: Category, where: { name: { [Op.iLike]: `%${category}%` } } },
          ]
        }
      }
      else if(category && brand && priceMax && priceMin && size){
        options = {
          where: {
            isActive:true,
            price: {
              [Op.and]: [
                { [Op.gte]: priceMin ? priceMin : 0 }, // Precio sea mayor o igual a precio minimo
                { [Op.lte]: priceMax } // Precio sea menor o igual a precio maximo
              ],
            }
          },
          include: [
            { model: Size, where:{[Op.and]:[{ number: size },{isActive:true}]}},
            { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } } },
            { model: Category, where: { name: { [Op.iLike]: `%${category}%` } }},
          ]
        }
      }
      else if(name && brand && priceMax && priceMin){
        options = {
          where: {
            isActive:true,
            title: { [Op.iLike]: `%${name}%` },
            price: {
              [Op.and]: [
                { [Op.gte]: priceMin ? priceMin : 0 }, // Precio sea mayor o igual a precio minimo
                { [Op.lte]: priceMax } // Precio sea menor o igual a precio maximo
              ],
            }
          },
          include: [
            { model: Size, where:{isActive:true}},
            { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } } },
            { model: Category},
          ]
        }
      }
      else if(category && brand && priceMax && priceMin){
        options = {
          where: {
            isActive:true,
            price: {
              [Op.and]: [
                { [Op.gte]: priceMin ? priceMin : 0 }, // Precio sea mayor o igual a precio minimo
                { [Op.lte]: priceMax } // Precio sea menor o igual a precio maximo
              ],
            }
          },
          include: [
            { model: Size, where:{isActive:true}},
            { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } } },
            { model: Category, where: { name: { [Op.iLike]: `%${category}%` } } },
          ]
        }
      }
      else if(category && name && priceMax && priceMin){
        options = {
          where: {
            isActive:true,
            title: { [Op.iLike]: `%${name}%` },
            price: {
              [Op.and]: [
                { [Op.gte]: priceMin ? priceMin : 0 }, // Precio sea mayor o igual a precio minimo
                { [Op.lte]: priceMax } // Precio sea menor o igual a precio maximo
              ],
            }
          },
          include: [
            { model: Size, where:{isActive:true}},
            { model: Brand},
            { model: Category, where: { name: { [Op.iLike]: `%${category}%` } } },
          ]
        }
      }
      else if(size && brand && priceMax && priceMin){
        options = {
          where: {
            isActive:true,
            price: {
              [Op.and]: [
                { [Op.gte]: priceMin ? priceMin : 0 }, // Precio sea mayor o igual a precio minimo
                { [Op.lte]: priceMax } // Precio sea menor o igual a precio maximo
              ],
            }
          },
          include: [
            { model: Size, where:{[Op.and]:[{ number: size },{isActive:true}]}},
            { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } } },
            { model: Category},
          ]
        }
      }
      else if(category && brand && name && size){
        options = {
          where: {
            isActive:true,
            title: { [Op.iLike]: `%${name}%` },
          },
          include: [
            { model: Size, where:{[Op.and]:[{ number: size },{isActive:true}]}},
            { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } } },
            { model: Category, where: { name: { [Op.iLike]: `%${category}%` } } },
          ]
        }
      }
      else if(category && brand && name){
        options = {
          where: {
            isActive:true,
            title: { [Op.iLike]: `%${name}%` },
          },
          include: [
            { model: Size, where:{isActive:true}},
            { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } } },
            { model: Category, where: { name: { [Op.iLike]: `%${category}%` } } },
          ]
        }
      }
      else if(brand && priceMax && priceMin){
        options = {
          where: {
            isActive:true,
            price: {
              [Op.and]: [
                { [Op.gte]: priceMin ? priceMin : 0 }, // Precio sea mayor o igual a precio minimo
                { [Op.lte]: priceMax } // Precio sea menor o igual a precio maximo
              ],
            }
          },
          include: [
            { model: Size, where:{isActive:true}},
            { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } } },
            { model: Category},
          ]
        }
      }
      else if(priceMax && priceMin && category){
        options = {
          where: {
            isActive:true,
            price: {
              [Op.and]: [
                { [Op.gte]: priceMin ? priceMin : 0 }, // Precio sea mayor o igual a precio minimo
                { [Op.lte]: priceMax } // Precio sea menor o igual a precio maximo
              ],
            }
          },
          include: [
            { model: Size, where:{isActive:true}},
            { model: Brand},
            { model: Category, where: { name: { [Op.iLike]: `%${category}%` } } },
          ]
        }
      }
      else if( name && priceMax && priceMin){
        options = {
          where: {
            isActive:true,
            title: { [Op.iLike]: `%${name}%` },
            price: {
              [Op.and]: [
                { [Op.gte]: priceMin ? priceMin : 0 }, // Precio sea mayor o igual a precio minimo
                { [Op.lte]: priceMax } // Precio sea menor o igual a precio maximo
              ],
            }
          },
          include: [
            { model: Size, where:{isActive:true}},
            { model: Brand},
            { model: Category},
          ]
        }
      }
      else if(size && priceMax && priceMin){
        options = {
          where: {
            isActive:true,
            price: {
              [Op.and]: [
                { [Op.gte]: priceMin ? priceMin : 0 }, // Precio sea mayor o igual a precio minimo
                { [Op.lte]: priceMax } // Precio sea menor o igual a precio maximo
              ],
            }
          },
          include: [
            { model: Size, where:{[Op.and]:[{ number: size },{isActive:true}]}},
            { model: Brand},
            { model: Category},
          ]
        }
      }
      else if(size && category && brand){
        options = {
          where:{isActive:true},
            include: [
            { model: Size, where:{[Op.and]:[{ number: size },{isActive:true}]}},
            { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } }},
            { model: Category, where: { name: { [Op.iLike]: `%${category}%` } }},
          ]
        }
      }
      else if(name && brand){
        options = {
          where: {
            isActive:true,
            title: { [Op.iLike]: `%${name}%` },
          },
          include: [
            { model: Size, where:{isActive:true}},
            { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } } },
            { model: Category},
          ]
        }
      }
      else if(category && name){
        options = {
          where: {
            isActive:true,
            title: { [Op.iLike]: `%${name}%` },
          },
          include: [
            { model: Size, where:{isActive:true}},
            { model: Brand},
            { model: Category, where: { name: { [Op.iLike]: `%${category}%` } } },
          ]
        }
      }
      else if(category && brand){
        options = {
          where:{isActive:true},
          include: [
            { model: Size , where:{isActive:true}},
            { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } } },
            { model: Category, where: { name: { [Op.iLike]: `%${category}%` } } },
          ]
        }
      }
      else if(size && brand){
        options = {
            include: [
            { model: Size, where:{[Op.and]:[{ number: size },{isActive:true}]} },
            { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } } },
            { model: Category},
          ]
        }
      }
      else if(size && category){
        options = {
            include: [
            { model: Size, where:{[Op.and]:[{ number: size },{isActive:true}]}},
            { model: Brand},
            { model: Category, where: { name: { [Op.iLike]: `%${category}%` } }},
          ]
        }
      }
      else if(size && name){
        options = {
          where: {
            isActive:true,
            title: { [Op.iLike]: `%${name}%` },
          },
          include: [
            { model: Size, where:{[Op.and]:[{ number: size },{isActive:true}]}},
            { model: Brand},
            { model: Category},
          ]
        }
      }
     
      return options
    } catch (error) {
      throw error
    }
  }
  module.exports={getAllFilters}