const http = require('http')

const host = '127.0.0.1'
const port = 3000
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plane' })
    res.write("Welcome user, my name is Rodrigo Franko Vásquez peralta")
    res.end()
})

server.listen(port, host, () => {
    console.log("Server running at", host, port)
})