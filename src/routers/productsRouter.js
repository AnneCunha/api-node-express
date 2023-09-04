import express from 'express'
import getProduct from '../controllers/products/getProduct.js'
import listProducts from '../controllers/products/listProducts.js'
import insertProduct from '../controllers/products/insertProduct.js'
import updateProduct from '../controllers/products/updateProducts.js'
import deleteProduct from '../controllers/products/deleteProduct.js'

const router = express.Router()

router.get('/', getProduct)
router.get('/listProducts', listProducts)
router.post('/', insertProduct)
router.put('/', updateProduct)
router.delete('/', deleteProduct)

export default router