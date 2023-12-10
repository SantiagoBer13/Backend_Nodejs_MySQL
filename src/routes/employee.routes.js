import { Router } from "express";
import { pool } from "../db.js"
import { getEmployee, getEmployees, createEmployee, updateEmployee, deleteEmployee } from "../controllers/employee.controller.js";

const router = Router();

router.get("/employees", getEmployees)

router.get("/employees/:id", getEmployee)

router.post("/employees", createEmployee)

router.patch("/employees/:id", updateEmployee)

router.delete("/employees/:id",deleteEmployee)

export default router