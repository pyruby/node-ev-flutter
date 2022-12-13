const express = require('express')
const app = express()
const PORT = 8080

app.use(express.static(__dirname + '/public/ev'))

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})