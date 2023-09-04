import db from '../database/db.js'

const getById = async (id) => {
    return await db.query("SELECT name FROM products Where id = ?", [id])
}

const create = async (product) => {
    const {name, amount, description} = product
    return await db.query("INSERT INTO products (name, email, pass) VALUES (?, ?, ?);", [name, amount, description])
}

const update = async (product) => {
    const {name, amount, description} = product
    return await db.query("UPDATE products SET name = ?, amount = ?, description = ? WHERE id = ?;", [name, amount, description, id])
}

const remove = async (product) => {
    return await db.query("DELETE FROM product WHERE id = ?", [id])
}

export default {getById, create, update, remove}