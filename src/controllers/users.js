const { user } = require('../database/models');
const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');

const controller = {
    RegIndex: async (req, res) => {
        try {
            res.render(('./users/register'));
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },
    RegShow: async (req, res) => {
        try {
            const usuarios = await user.findAll();
            res.send(usuarios);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },
    RegCreate: async (req, res) => {

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
                res.redirect('/users/'+ param);
            } else {
                return res.render('./users/register', { errors: errors.errors })
            }

        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    }, 
    ProfileIndex: async (req, res) => {
        try {
            let param = req.params.id;
            const perfil = await user.findByPk(param);
            res.render('./users/profile', {
                usuario: perfil
            });
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },
    LogIndex: (req, res) => res.render('./users/login'),
    
    LogProcess: async (req, res) => {

        try {

            let errors = validationResult(req);

            if (errors.isEmpty()) {
                const usuarios = await user.findAll();
                let loggedUser = undefined;

                for (let i = 0; i < usuarios.length; i++) {
                    if (usuarios[i].email == req.body.email) {
                        if (bcryptjs.compareSync(req.body.password, usuarios[i].password)) {
                            loggedUser = usuarios[i];
                            break;
                        }
                    }
                }

                if (loggedUser == undefined) {
                    return res.render('./users/login', {
                        errors: [
                            { msg: 'Credenciales invalidas' }
                        ]
                    })
                }

                req.session.loggedUser = loggedUser;
                res.send('success');
                
            } else {
                return res.render('./users/login', { errors: errors.errors })
            }


        } catch (error) {
            res.status(500).send({ message: error.message });
        }

    }
}

module.exports = controller;