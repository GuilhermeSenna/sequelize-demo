(async () => {
    const database = require('./db');
    const Produto = require('./models/produto');
    const Fabricante = require('./models/fabricante');
    const Categoria = require('./models/categoria');
    await database.sync();

    // const novaCategoria = await Categoria.create({ nome: 'Informática' });
    // const produto = await Produto.findByPk(1);
    // await produto.setCategoria([novaCategoria]);

    const produto = await Produto.findByPk(1, {
        include: Categoria
    });

    console.log(produto.categoria)

    //Recriar o banco de dados
    // await database.sync({ force: true });

    // Create

    // Aula 1

    // const novoProduto = await Produto.create({
    //     nome: 'Monitor Led',
    //     preco: 500,
    //     descricao: 'Monitor bacana'
    // });

    // Aula 2

    // const novoFabricante = await Fabricante.create({
    //     nome: 'Apple'
    // });

    // const novoProduto = await Produto.create({
    //     nome: 'MacBook',
    //     preco: 10000,
    //     descricao: 'Notebook da Apple',
    //     idFabricante: novoFabricante.id  //FK
    // });

    // Aula 2
    // Usando Eager Loading
    // Obtendo o fabricante do produto (1-1)
    // const produto = await Produto.findByPk(1, { include: Fabricante });
    // console.log(produto.fabricante.nome);

    // const fabricante = await Fabricante.findByPk(1, { include: Produto });
    // const produtos = await fabricante.getProdutos();
    // console.log(fabricante.produtos)


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
    // await Produto.destroy({
    //     where: {
    //         preco: 30
    //     }
    // })

    // Update
    // produto.descricao = 'Fiz uma alteracao';
    // await produto.save();



    // console.log(produtos);
})();