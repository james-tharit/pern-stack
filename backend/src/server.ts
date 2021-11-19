import express, { Request, Response } from "express"
import cors from 'cors'
const allowHosts:cors.CorsOptions = {
    origin: 'http://localhost:3000'
}

const server = express()

server.use(express.json())
server.use(cors(allowHosts))
server.get("/", (req: Request, res: Response) => {
    res.json({status:"OK"})
})

export default server