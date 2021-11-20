import express, { Request, Response } from "express"
import cors from 'cors'
import apiV1 from './api'

const allowHosts:cors.CorsOptions = {
    origin: 'http://localhost:3000'
}

const server = express()

server.use(express.json())
server.use(cors(allowHosts))
server.use(apiV1)
server.get("/", (req: Request, res: Response) => {
    res.send("ok")
})

export default server