const { check } = require("express-validator");

let logValidations = [
    check('email')
        .isEmail()
        .withMessage('Email Invalido'),
    check('password')
        .isLength({min: 6})
        .withMessage('La contraseña debe tener almenos 8 caracteres')
];

module.exports = logValidations;
