(async () => {
    const database = require('./db');
    const Produto = require('./produto')
    await database.sync();

    // Create
    // const novoProduto = await Produto.create({
    //     nome: 'Monitor Led',
    //     preco: 500,
    //     descricao: 'Monitor bacana'
    // });

    // console.log(novoProduto);

    // Read
    // const produtos = await Produto.findAll();
    // const produtos = await Produto.findAll({
    //     where: {
    //         preco: 15
    //     }
    // })

    // Delete
    // const produto = await Produto.findByPk(1);
    // console.log(produto);

    // await produto.destroy();
    await Produto.destroy({
        where: {
            preco: 30
        }
    })

    // Update
    // produto.descricao = 'Fiz uma alteracao';
    // await produto.save();



    // console.log(produtos);
})();