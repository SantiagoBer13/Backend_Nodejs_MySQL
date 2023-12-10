//const express = require("express")
import Express from "express"
import employeeRoutes from "./routes/employee.routes.js"

const app = Express()

app.use(Express.json())
app.use("/api",employeeRoutes)
app.use((req,res,next)=>{
    res.status(404).json({
        message: "Endpoint not found"
    })
})

export default app