import { Router } from "express";
import cartsController from "../controllers/carts.controller.js";
import { passportCall } from "../services/auth.js";

const router = Router();

/* MongoDB */
router.get('/', cartsController.getCarts);
router.post('/', cartsController.addCart);
router.get('/:cid', cartsController.getCartById);
router.put('/:cid', cartsController.updateCart);
router.delete('/:cid', cartsController.deleteAllProducts);
router.post('/:cid/product/:pid', passportCall('jwt', { strategyType: 'jwt', sessions: false }), cartsController.addProductToCart);
router.put('/:cid/product/:pid', cartsController.updateProductQuantity);
router.delete('/:cid/product/:pid', cartsController.deleteProductFromCart);
router.post('/:cid/purchase', cartsController.purchaseCart);

export default router;