const {list, all, filter, match, generate, create} = require('../models/product');

const controller = {
    index: (req,res) => {
        const{search} = req.query;

        return search ? res.render('./products/list.ejs', {
            title: 'Search | '+search,
            productos: filter('name', search)
        }) : res.render('./products/list.ejs', {
            title: 'Product List',
            productos: all()
        })
    },
    create: (req,res) => {
        res.render('./products/create.ejs', {
            title: "Create"
        })
    },
    show: (req,res) => {
        const {id} = req.params;
        let prod = id ? match('id', id) : null;
        return prod ? 
        res.render('./products/show.ejs', {
            title: "Product",
            producto: prod,
        }) : 
        res.render('error', {
            title:"ERROR",
            error:"No se encontró ningún producto"
        })
    }, 
    storage: (req,res) => {
        const nuevo = generate(req.body);
        create(nuevo);

        return res.redirect('/products/'+nuevo.id);
    }
}

module.exports = controller;