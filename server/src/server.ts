import express from 'express'

const app = express()

app.get('/', (request, response) => {
  response.send("Jonas brotherasd")
})


app.post('/cadastrarHosmi', (req, res) => {

})

app.listen(3333)