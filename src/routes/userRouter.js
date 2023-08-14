import express from "express"

const router = express.Router()

//user
router.get('/', (req, res) => {
    res.json({message: "Bem-vindo! caminho router, pelo metodo get/user"})
}) 
router.post('/', (req, res) => {
    res.json({message: "Bem-vindo! caminho router, pelo metodo post/user"})
}) 
router.put('/', (req, res) => {
    res.json({message: "Bem-vindo! caminh router, pelo metodo put/user"})
}) 
router.delete('/', (req, res) => {
    res.json({message: "Bem-vindo! caminho router, pelo metodo delete/user"})
})

export default router