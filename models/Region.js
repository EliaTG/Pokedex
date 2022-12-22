const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Region = sequelize.define("region",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: false,
    },
});

module.exports = Region;