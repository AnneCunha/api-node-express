import product from "../../models/productModel.js"

const deleteProduct = async(req, res) => {
    try{
        const productData = req.body
        const [result] = await product.remove(productData.id)
        if(result.affectedRows === 1){
            res.json({
                success: "Produto deletado com Sucesso!",
            })
        }
    } catch (error){
        console.log(error)
        res.status(500).json({
            error: "Erro no servidor!",
        })
    }
}

export default deleteProduct