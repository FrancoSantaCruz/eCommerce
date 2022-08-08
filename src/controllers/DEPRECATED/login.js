const { validationResult } = require("express-validator");
const { user } = require('../database/models');
const bcryptjs = require('bcryptjs');

const controller = {
    index: (req, res) => res.render('./users/login'),
    processLogin: async (req, res) => {

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
