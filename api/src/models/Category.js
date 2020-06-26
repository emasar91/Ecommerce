const S = require('sequelize');
const Category = (sequelize, S) => {
    // defino el modelo

    const C = sequelize.define('category', {
        id: {
            primaryKey: true,
            type: S.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        nombre: {
            allowNull: false,
            type: S.STRING,
        },
    });

    return C;
};

server.put('/:id', (req, res) => {
    const id = req.params.id;

    category.update(req.body, {
            where: {
                id: id,
            },
            returning: true,
        })
        .then(response => {
            const category = response[1][0];
            return category;
        })
        .then(category => res.send(category))
        .catch(err => res.send(err.message));
});

server.delete('/:id', (req, res) => {
    const id = req.params.id;
    category.destroy({
            where: { id: id },
        })
        .then(deletedCategory => {
            res.json(deletedCategory);
        })
        .catch(res.send);
});


module.exports = Category;