import express ,{Request, Response} from'express'
import path from 'path'
import dotenv from 'dotenv'

import apiRoutes from './routes/api'

dotenv.config()

const server = express()

server.use(express.static(path.join(__dirname,'../public')))
server.use(express.urlencoded({extended: true}))

server.listen(process.env.PORT)

server.use(apiRoutes)

//Criando o endpoint
server.use((req:Request, res:Response) =>{
    
    res.status(404)
    //TODA API SEMPRE VAI RETORNAR UM JSON
    res.json({error:'Endpoint não encontrado'})
})