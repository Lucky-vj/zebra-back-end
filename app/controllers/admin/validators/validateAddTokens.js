const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates get item request
 */
const validateAddTokens = [
    check('token1')
        .exists()
        .withMessage('token1 MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Address1')
        .trim(),
    check('token2')
        .exists()
        .withMessage('token2 MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Address2')
        .trim(),
    check('chain')
        .exists()
        .withMessage('chain MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Chain')
        .trim(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateAddTokens }