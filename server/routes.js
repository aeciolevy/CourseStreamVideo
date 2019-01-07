const example = require('./routes/example')

async function routes (fastify) {
    fastify.register(example, { prefix: 'example'});
};

module.exports = routes;
