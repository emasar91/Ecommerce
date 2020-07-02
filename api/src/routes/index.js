const { Router } = require('express');
//import all routers;
const authRouter = require('./auth.js');
const productRouter = require ('./products.js');
const categoryRouter = require ('./categories.js');
const userRouter = require ('./users.js');
const ordenRouter = require ('./ordenes.js');

const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);

router.use('/auth', authRouter);
router.use('/products', productRouter);
router.use('/categories', categoryRouter);
router.use('/users', userRouter);
router.use('/ordenes', ordenRouter);





module.exports = router;
