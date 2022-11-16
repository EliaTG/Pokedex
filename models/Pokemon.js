const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Pokemon = sequelize.define("pokemon",{
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
        type: Sequelize.STRING,
        allowNull: false,
    },
    type:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    region:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    // imagurl:{
    //     type: DataTypes.BLOB('long'),
    //     allowNull: false,
    // },
});

module.exports = Pokemon;