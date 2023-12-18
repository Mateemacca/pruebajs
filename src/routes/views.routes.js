import { Router } from "express";
import ProductManager from '../ProductManager.js';

const viewsRouter = Router()
const productManager = new ProductManager('./productos.json');

viewsRouter.get('/', async (req, res) => {
    try {
        const { limit } = req.query;
    const productos = await productManager.getProducts();
    if (!limit) {
        res.render('home', { productos });
    } else {
        let productosFiltered = limit ? productos.slice(0, +limit) : productos;
        res.render('home', { productos: productosFiltered });
    }
        
    } catch (error) {
        console.log('Error al obtener los productos:', error);
    }
});
viewsRouter.get('/realtimeproducts', async (req,res)=>{
    try {
        const { limit } = req.query;
    const productos = await productManager.getProducts();
    if (!limit) {
        res.render('realTimeProducts', { productos });
    } else {
        let productosFiltered = limit ? productos.slice(0, +limit) : productos;
        res.render('realTimeProducts', { productos: productosFiltered });
    }
        
    } catch (error) {
        console.log('Error al obtener los productos:', error);
    }
})

export default viewsRouter