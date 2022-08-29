const postRouter = require('./postRouter')
const authRouter = require('./authRouter')
const authMiddleware = require('../middlewares/auth')


module.exports = function (app) {
    app.use('/auth', authRouter);

    app.use(authMiddleware);
    app.use('/posts', postRouter);
}