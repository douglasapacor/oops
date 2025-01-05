import express from 'express'
import { createServer } from "http"
import { Server } from 'socket.io'
import cors from "cors"
import bodyParser from "body-parser"
import path from "path"

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(cors())
app.use(bodyParser.json())

io.on('connection', (socket) => {
  console.log('Novo cliente conectado:', socket.id);

  socket.on('disconnect', () => {
    console.log('Cliente desconectado:', socket.id);
  });
})

export default app
