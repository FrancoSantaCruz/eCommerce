const { user } = require('../database/models');

const controller = {
    index: async (req, res) => {
        try {
            res.render(('./users/register'));
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },
    show: async (req, res) => {
        try {
            const usuarios = await user.findAll();
            res.send(usuarios);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },
    create: async (req, res) => {
        try {
            let data = {
                name: req.body.name,
                lastname: req.body.lastname,
                province: req.body.province,
                location: req.body.location,
                codpostal: req.body.codpostal ? req.body.codpostal : null,
                address: req.body.address,
                email: req.body.email,
                password: req.body.password,
                legal: req.body.legal == 1? true : false,
                conditions: req.body.conditions == 1? true : false
            }
            const usuario = await user.create(data);
            res.redirect('/users');
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    }
}

module.exports = controller;