const { user } = require('../database/models');

const controller = {
    index: async (req, res) => {
        try {
            let param = req.params.id;
            const perfil = await user.findByPk(param);
            res.render('./users/profile', {
                usuario: perfil
            });
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    }
}

module.exports = controller;