const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname, "../data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(dataDir, "test_db.sqlite"),
  logging: false
});

module.exports = sequelize; 