const { Product, Brand, Category, Size } = require('../db');
const { Op } = require('sequelize');


function getAllFilters({ priceMax, priceMin, category, brand, name, size }) {
    let options = {}
    if (priceMax && priceMin && category && brand && name && size) {
      options = {
        where: {          
          title: { [Op.iLike]: `%${name}%` },
          price: {
            [Op.and]: [
              { [Op.gte]: priceMin ? priceMin : 0 }, // Precio sea mayor o igual a precio minimo
              { [Op.lte]: priceMax } // Precio sea menor o igual a precio maximo
            ],
          }
        },
        include: [
          { model: Size, where: { number: size}},
          { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } } },
          { model: Category, where: { name: { [Op.iLike]: `%${category}%` } } },
        ]
      }
    }
    else if (priceMax && priceMin && brand && name && size) {
      options = {
        where: {
          
          title: { [Op.iLike]: `%${name}%` },
          price: {
            [Op.and]: [
              { [Op.gte]: priceMin ? priceMin : 0 }, // Precio sea mayor o igual a precio minimo
              { [Op.lte]: priceMax } // Precio sea menor o igual a precio maximo
            ],
          }
        },
        include: [
          { model: Size, where: { number: size}},
          { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } } },
          { model: Category},
        ]
      }
    }
    else if (priceMax && priceMin && category && brand && name) {
      options = {
        where: {
          title: { [Op.iLike]: `%${name}%` },
          price: {
            [Op.and]: [
              { [Op.gte]: priceMin ? priceMin : 0 }, // Precio sea mayor o igual a precio minimo
              { [Op.lte]: priceMax } // Precio sea menor o igual a precio maximo
            ],
          }
        },
        include: [
          { model: Size},
          { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } } },
          { model: Category, where: { name: { [Op.iLike]: `%${category}%` } } },
        ]
      }
    }
    else if(category && brand && priceMax && priceMin && size){
      options = {
        where: {
          
          price: {
            [Op.and]: [
              { [Op.gte]: priceMin ? priceMin : 0 }, // Precio sea mayor o igual a precio minimo
              { [Op.lte]: priceMax } // Precio sea menor o igual a precio maximo
            ],
          }
        },
        include: [
          { model: Size, where: { number: size}},
          { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } } },
          { model: Category, where: { name: { [Op.iLike]: `%${category}%` } }},
        ]
      }
    }
    else if(name && brand && priceMax && priceMin){
      options = {
        where: {
          title: { [Op.iLike]: `%${name}%` },
          price: {
            [Op.and]: [
              { [Op.gte]: priceMin ? priceMin : 0 }, // Precio sea mayor o igual a precio minimo
              { [Op.lte]: priceMax } // Precio sea menor o igual a precio maximo
            ],
          }
        },
        include: [
          { model: Size},
          { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } } },
          { model: Category},
        ]
      }
    }
    else if(category && brand && priceMax && priceMin){
      options = {
        where: {
          price: {
            [Op.and]: [
              { [Op.gte]: priceMin ? priceMin : 0 }, // Precio sea mayor o igual a precio minimo
              { [Op.lte]: priceMax } // Precio sea menor o igual a precio maximo
            ],
          }
        },
        include: [
          { model: Size},
          { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } } },
          { model: Category, where: { name: { [Op.iLike]: `%${category}%` } } },
        ]
      }
    }
    else if(category && name && priceMax && priceMin){
      options = {
        where: {
          title: { [Op.iLike]: `%${name}%` },
          price: {
            [Op.and]: [
              { [Op.gte]: priceMin ? priceMin : 0 }, // Precio sea mayor o igual a precio minimo
              { [Op.lte]: priceMax } // Precio sea menor o igual a precio maximo
            ],
          }
        },
        include: [
          { model: Size},
          { model: Brand},
          { model: Category, where: { name: { [Op.iLike]: `%${category}%` } } },
        ]
      }
    }
    else if(size && brand && priceMax && priceMin){
      options = {
        where: {
          
          price: {
            [Op.and]: [
              { [Op.gte]: priceMin ? priceMin : 0 }, // Precio sea mayor o igual a precio minimo
              { [Op.lte]: priceMax } // Precio sea menor o igual a precio maximo
            ],
          }
        },
        include: [
          { model: Size, where: { number: size}},
          { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } } },
          { model: Category},
        ]
      }
    }
    else if(category && brand && name && size){
      options = {
        where: {
          
          title: { [Op.iLike]: `%${name}%` },
        },
        include: [
          { model: Size, where: { number: size}},
          { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } } },
          { model: Category, where: { name: { [Op.iLike]: `%${category}%` } } },
        ]
      }
    }
    else if(category && brand && name){
      options = {
        where: {
          title: { [Op.iLike]: `%${name}%` },
        },
        include: [
          { model: Size},
          { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } } },
          { model: Category, where: { name: { [Op.iLike]: `%${category}%` } } },
        ]
      }
    }
    else if(brand && priceMax && priceMin){
      options = {
        where: {
          price: {
            [Op.and]: [
              { [Op.gte]: priceMin ? priceMin : 0 }, // Precio sea mayor o igual a precio minimo
              { [Op.lte]: priceMax } // Precio sea menor o igual a precio maximo
            ],
          }
        },
        include: [
          { model: Size},
          { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } } },
          { model: Category},
        ]
      }
    }
    else if(priceMax && priceMin && category){
      options = {
        where: {
          price: {
            [Op.and]: [
              { [Op.gte]: priceMin ? priceMin : 0 }, // Precio sea mayor o igual a precio minimo
              { [Op.lte]: priceMax } // Precio sea menor o igual a precio maximo
            ],
          }
        },
        include: [
          { model: Size},
          { model: Brand},
          { model: Category, where: { name: { [Op.iLike]: `%${category}%` } } },
        ]
      }
    }
    else if( name && priceMax && priceMin){
      options = {
        where: {
          title: { [Op.iLike]: `%${name}%` },
          price: {
            [Op.and]: [
              { [Op.gte]: priceMin ? priceMin : 0 }, // Precio sea mayor o igual a precio minimo
              { [Op.lte]: priceMax } // Precio sea menor o igual a precio maximo
            ],
          }
        },
        include: [
          { model: Size},
          { model: Brand},
          { model: Category},
        ]
      }
    }
    else if(size && priceMax && priceMin){
      options = {
        where: {
          
          price: {
            [Op.and]: [
              { [Op.gte]: priceMin ? priceMin : 0 }, // Precio sea mayor o igual a precio minimo
              { [Op.lte]: priceMax } // Precio sea menor o igual a precio maximo
            ],
          }
        },
        include: [
          { model: Size, where: { number: size}},
          { model: Brand},
          { model: Category},
        ]
      }
    }
    else if(size && category && brand){
      options = {
          include: [
          { model: Size, where: { number: size}},
          { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } }},
          { model: Category, where: { name: { [Op.iLike]: `%${category}%` } }},
        ]
      }
    }
    else if(name && brand){
      options = {
        where: {
          title: { [Op.iLike]: `%${name}%` },
        },
        include: [
          { model: Size},
          { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } } },
          { model: Category},
        ]
      }
    }
    else if(category && name){
      options = {
        where: {
          title: { [Op.iLike]: `%${name}%` },
        },
        include: [
          { model: Size},
          { model: Brand},
          { model: Category, where: { name: { [Op.iLike]: `%${category}%` } } },
        ]
      }
    }
    else if(category && brand){
      options = {
        include: [
          { model: Size},
          { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } } },
          { model: Category, where: { name: { [Op.iLike]: `%${category}%` } } },
        ]
      }
    }
    else if(size && brand){
      options = {
          include: [
          { model: Size, where: { number: size}},
          { model: Brand, where: { name: { [Op.iLike]: `%${brand}%` } } },
          { model: Category},
        ]
      }
    }
    else if(size && category){
      options = {
          include: [
          { model: Size, where: { number: size}},
          { model: Brand},
          { model: Category, where: { name: { [Op.iLike]: `%${category}%` } }},
        ]
      }
    }
    else if(size && name){
      options = {
        where: {
          
          title: { [Op.iLike]: `%${name}%` },
        },
        include: [
          { model: Size, where: { number: size}},
          { model: Brand},
          { model: Category},
        ]
      }
    }
    console.log(options)
    return options
  }
  module.exports={getAllFilters}