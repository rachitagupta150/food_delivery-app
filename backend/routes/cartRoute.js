const express= require("express")
const {addToCart,removeFromCart,getCart} =require("../controllers/cartController")
const cartRouter=express.Router();
const authMiddleware =require("../middleware/auth.js");

cartRouter.post("/add",authMiddleware,addToCart)
cartRouter.post("/remove",authMiddleware,removeFromCart)
cartRouter.post("/get",authMiddleware,getCart)

module.exports=cartRouter;