require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

// Import enviroment variables
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/yourshoes`,
        { logging: false, native: false }
      );

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
//                                                           [N + ameModel, dataModel]
let capitalizadedEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capitalizadedEntries);

// Destructuring models from sequelize.models
// here -->
const { Category, Product, Order, User, Brand, Role, Size, Review } = sequelize.models;
// Relations of models
// here -->

Category.belongsToMany(Product, {
  through: "category_product",
  timestamps: false,
});
Product.belongsTo(Category);

Brand.belongsToMany(Product, { through: "brand_product", timestamps: false });
Product.belongsTo(Brand);

Review.belongsTo(User, { as: "author", allowNull: false });
Review.belongsTo(Product, { as: "product", allowNull: false });

Brand.belongsToMany(Product, { through: "brand_product", timestamps: false });
Product.belongsTo(Brand);

User.belongsToMany(Order, { through: "user_order", timestamps: false });
Order.belongsTo(User);

Product.belongsToMany(Order, { through: "order_product", timestamps: false });
Order.belongsToMany(Product, { through: "order_product", timestamps: false });

Role.belongsToMany(User, { through: "user_role", timestamps: false });

Product.belongsToMany(Size, { through: "size_product", timestamps: false });
Size.belongsToMany(Product, { through: "size_product", timestamps: false });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
