import product from '../../models/productModel.js'

const getProduct = async (req, res) => {
    try{
        const productData = req.body
        const [rows] = await product.getById(productData.id)
        if(rows.length === 0){
            res.status(404).json({
                error: `Produto id: ${productData.id} não Encontrado!`
            })
        } else {
            res.json({
                success: "Produto encontrado com sucesso",
                user: rows[0] 
            })
        }
    } catch (error){
        console.log(error)
        res.status(500).json({
            error: "Erro no servidor!",
        })
    }
}

export default getProduct