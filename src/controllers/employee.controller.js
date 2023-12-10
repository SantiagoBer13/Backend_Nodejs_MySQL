import { pool } from "../db.js"

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM employee")
        return res.send(rows)
    } catch (error) {
        return res.status(500).send({message: "Algo fue mal"});
    }
}
export const getEmployee = async (req, res) => {

    try {
        const id = req.params.id
        const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?",[id])
        if(rows.length <= 0) return res.status(404).json({
            message: "Empleado no encontrado."
        })
        return res.send(rows[0])
    } catch (error) {
        return res.status(500).send({message: "Algo fue mal"});
    }
}

export const createEmployee = async (req, res) => {
    try {
        const {name , salary} = req.body
        const [rows] = await pool.query("INSERT INTO employee (name, salary) VALUES (?,?)", [name, salary])
        return res.status(201).json({
            id: rows.insertId,
            name,
            salary
        })
    } catch (error) {
        return res.status(500).send({message: "Algo fue mal"});
    }

}
export const updateEmployee = async (req, res) => {
    try {
        const {id} = req.params
        const {name, salary} = req.body
        const [result] = await pool.query("UPDATE employee SET name = IFNULL(?,name), salary = IFNULL(?, salary) WHERE id = ?", [name, salary, id])
        if(result.affectedRows <= 0) return res.status(404).json({
            message: "Empleado no encontrado"
        })
        const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?",[id])
        return res.json(rows[0])
    } catch (error) {
        return res.status(500).send({message: "Algo fue mal"});
    }
}

export const deleteEmployee = async (req, res) => {
    try {
        const id = req.params.id
        const [rows] = await pool.query("DELETE FROM employee WHERE id = ?",[id])
        if(rows.affectedRows <= 0) return res.status(404).json({
            message: "Empleado no encontrado"
        })
        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).send({message: "Algo fue mal"});
    }
    
}

