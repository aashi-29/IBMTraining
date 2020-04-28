const express = require('express')
const app = express()
const port = 3000


let users = [
    {name:'Aastha', salary: 395498}
]

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/users', (req, res)=> 
{
    res.json()
})
app.get('/users', (req, res) => res.send(users))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
