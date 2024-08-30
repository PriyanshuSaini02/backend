const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(4000, () => {
    console.log(`app listening on port 4000`)
})