module.exports = function (fastify, opts, next) {
    fastify.get('/', (req, res) => {
        res.send({ status: 'Example route working' });
    })
    next();
}
