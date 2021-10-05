const Sequelize = require('sequelize');
const database = require('../db');
const Fabricante = require('./fabricante');
const Categoria = require('./categoria');
const CategoriaProduto = require('./categoriaProduto');

const Produto = database.define('produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: Sequelize.DECIMAL,
    descricao: Sequelize.STRING
});

// 1-1
// 1 Produto para 1 fabricante
Produto.belongsTo(Fabricante, {
    constraint: true,
    foreignKey: 'idFabricante'
});

// 1-N
// 1 Fabricante para muitos produtos
Fabricante.hasMany(Produto, {
    foreignKey: 'idFabricante'
});

//N-M

Produto.belongsToMany(Categoria, {
    through: {
        model: CategoriaProduto
    },
    foreignKey: 'idProduto',
    constraints: true
});

Categoria.belongsToMany(Produto, {
    through: {
        model: CategoriaProduto
    },
    foreignKey: 'idCategoria',
    constraints: true
});

Produto.hasMany(CategoriaProduto, { foreignKey: 'idProduto' });
CategoriaProduto.belongsTo(Produto, { foreignKey: 'idProduto' });
Categoria.hasMany(CategoriaProduto, { foreignKey: 'idCategoria' });
CategoriaProduto.belongsTo(Categoria, { foreignKey: 'idCategoria' });

/*
1-1
1-N
N-N
*/

module.exports = Produto;