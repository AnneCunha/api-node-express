import user from '../../models/userModel.js'

const listUsers = async (req, res) => {
    try{
        const [rows] = await user.getAll()
        if(rows.length === 0){
            res.status(404).json({
                error: `Nenhum usuário encontrado!`
            })
        } else {
            res.json({
                success: "Lista de Usuários atuais.",
                users: rows
            })
        }
    } catch (error){
        console.log(error)
        res.status(500).json({
            error: "Erro no servidor!",
        })
    }
}

export default listUsers