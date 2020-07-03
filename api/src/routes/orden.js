//Ruta que retorna todas las ordenes
server.get('/', function(req, res) {
    Product.findAll()
        .then(function(products) {
            return res.status(200).send(products);
        });
});

//Ruta modificar orden
server.put('/modificar/:id', function(req, res) {

    if (req.body.estado === "" || req.body.cantidad === "") {
        return res.status(400).send("faltan parametros")
    }

    Product.findOne({
            where: {
                id: req.params.id,
            }
        }).then(function(product) {
            orden.update({
                estado: req.body.estado,
                cantidad: req.body.cantidad,
            })
        })
        .then(() => {
            return res.send('Orden Modificada')
        })
        .catch(() => {
            return res.status(400).send('No se modifico');
        })
});

//Ruta que retorna todos los items del carrito.
server.get('/products/Orden', function(req, res) {

    Category.findByPk(req.params.id)

    .then((orden) => {
            orden.getProduct({ orden }).then((productos) => {
                if (productos.length === 0)
                    return res.status(200).send(productos)
                return res.send(productos)
            });
        })
        .catch(err => res.status(400).send("Sin productos"));
})

//Ruta para vaciar carrito
server.delete('/:id', (req, res) => {
    const id = req.params.id;
    Orden.destroy({
            where: { id: id },
        })
        .then(deletedOrden => {
            res.json(deletedOrden);
        })
        .catch(res.send);
});

//Ruta que retorne todas las ordenes de usuario
server.get('/ordenes/user', function(req, res) {

    Users.findByPk(req.params.id)

    .then((orden) => {
            orden.getUser({ orden }).then((productos) => {
                if (productos.length === 0)
                    return res.status(200).send(productos)
                return res.send(productos)
            });
        })
        .catch(err => res.status(400).send("Sin productos"));
})

server.post("/productId", function(req, res) {
            var product = function() {
                return Product.findByPk(req.params.productId);
            };
            var orden = function() {
                return Orden.findOne({
                    where: {
                        estado: true,
                    }
                });
            };

            if (req.body.accion === 'add') {
                Promise.all([product(), orden()]).then((response) => {
                    if (response[0] && response[1]) {
                        response[1].addProduct(response[0]);
                        return res.send("Producto Agregado");
                    } else {
                        res.status(404).send("El producto no existe");
                    };
                }).catch(() => res.sendStatus(400));

            }
            module.exports = server;