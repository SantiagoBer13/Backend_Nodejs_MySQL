import app from "./app.js"
import { PORT } from "../config.js"

console.log("Escuchando en el puerto "+PORT)
app.listen(PORT)