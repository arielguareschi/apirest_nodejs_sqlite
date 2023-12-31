import express from 'express'
import cors from 'cors'
import itensRouter from './routers/itens-router'
import facturasRouter from './routers/factura-router'

const PORT = process.env.PORT || 4000
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

const app = express()

// JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) =>{
    res.send('Bem-vindo!')
})

app.use(cors({
    origin: ['http://localhost:3000']
}))

app.use('/api', itensRouter)
app.use('/api', facturasRouter)


app.use((req, res) => {
    res.status(404)
})

app.listen(PORT, ()=> {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})