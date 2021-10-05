const Sequelize = require('sequelize');
const database = require('../db');

const CategoriaProduto = database.define('categoriaProduto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});

/*
1-1
1-N
N-N
*/

module.exports = CategoriaProduto;