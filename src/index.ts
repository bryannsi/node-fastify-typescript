import fastify from 'fastify'

const server = fastify({ logger: true })

server.get("/init", (req, res) => {
  server.log.info(req)
  res.send({ "mensaje": "este es el punto de entrada" })

})

server.listen({ port: 3000, host: '127.0.0.1' }, (err, address) => {
    if (err) {
      process.exit(1)
    }
    console.log(`El servidor se está ejecutando en: ${address}`)
  })