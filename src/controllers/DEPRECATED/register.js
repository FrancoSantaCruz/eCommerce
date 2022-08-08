const { user } = require('../database/models');
const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');

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

        const hPass = await bcrypt.hash(req.body.password, 10);
        try {
            let errors = validationResult(req);
            if (errors.isEmpty()) {
                let data = {
                    name: req.body.name,
                    lastname: req.body.lastname,
                    province: req.body.province,
                    location: req.body.location,
                    codpostal: req.body.codpostal,
                    address: req.body.address,
                    email: req.body.email,
                    password: hPass,
                    legal: req.body.legal == '1' ? true : false,
                    conditions: req.body.conditions == '1' ? true : false
                }
                const usuario = await user.create(data);
                console.log(usuario);
                let param = usuario.user_id;
                res.redirect('/profile/'+ param);
            } else {
                return res.render('./users/register', { errors: errors.errors })
            }

        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    }
}

module.exports = controller;