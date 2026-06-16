const validateUserAuth = (req, res, next) => {
    if (!req.body.email) {
        return res.status(400).json({
            message: 'Something went wrong',
            success: false,
            data: {},
            err: 'Email or password missing in the request'
        });
    }
    next();
}

const validateIsAdminRequest = (req, res, next) => {
    if (!req.body.id) {
        return res.status(400).json({
            message: 'Something went wrong',
            success: false,
            data: {},
            err: 'User id missing in the request'
        });
    }
    next();
} 

module.exports = {
    validateUserAuth,
    validateIsAdminRequest
}