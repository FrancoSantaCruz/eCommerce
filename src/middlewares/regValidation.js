const { check } = require("express-validator");

let regValidations = [
    check('name')
        .notEmpty().withMessage('(*) Spaces marked with * are mandatory'),
    check('lastname')
        .notEmpty().withMessage('(*) Spaces marked with * are mandatory'),
    check('email')
        .isEmail()
        .withMessage('Invalid email'),
    check('password')
        .isLength({min: 6})
        .withMessage('The password must contain at least 6 character'),
    check('legal')
        .isBoolean().withMessage('You must be an adult (+18)'),
    check('conditions')
        .isBoolean().withMessage('You have to accept the terms and conditions of this site'),
];

module.exports = regValidations;