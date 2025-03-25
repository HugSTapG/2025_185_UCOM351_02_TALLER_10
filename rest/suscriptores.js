// @ts-nocheck
let express = require('express');
let router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Suscriptores = require('../models').suscriptores;
const Intereses = require('../models').intereses;

router.get('/findAll/json', function (req, res, next) {
    Suscriptores.findAll({
        attributes: {
            exclude: ["updatedAt", "createdAt"]
        },
        include: [{
            model: Intereses,
            attributes: ['descripcion'],
            through: { attributes: [] }
        }],
    })
    .then(suscriptores => {
        res.json(suscriptores);
    })
    .catch(error => res.status(400).send(error));
});


router.get('/findById/:id/json', function (req, res, next) {
    let id = parseInt(req.params.id);

    Suscriptores.findOne({
        attributes: {
            exclude: ["updatedAt", "createdAt"]
        },
        include: [{
            model: Intereses,
            attributes: ['descripcion'],
            through: { attributes: [] }
        }],
        where: {
            id: id
        }
    })
        .then(suscriptores => {
            res.json(suscriptores);
        })
        .catch(error => res.status(400).send(error));
});


router.post('/save', function (req, res, next) {
    let { nombre, email, fecha_registro } = req.body;

    if (!nombre || !email || !fecha_registro) {
        return res.status(400).send("Missing required fields.");
    }

    Suscriptores.create({
        nombre: nombre,
        email: email,
        fecha_registro: new Date(fecha_registro),
        createdAt: new Date(),
        updatedAt: new Date()
    })
        .then(suscriptor => {
            res.json(suscriptor);
        })
        .catch(error => res.status(400).send(error));
});


router.put('/update', function (req, res, next) {
    let { id, nombre, email, fecha_registro } = req.body;

    if (!id || !nombre || !email || !fecha_registro) {
        return res.status(400).send("Missing required fields.");
    }

    Suscriptores.update({
        nombre: nombre,
        email: email,
        fecha_registro: new Date(fecha_registro),
        updatedAt: new Date()
    }, {
        where: { id: parseInt(id) }
    })
        .then(([rowsUpdated]) => {
            if (rowsUpdated > 0) {
                res.json({ message: "Subscriber updated successfully" });
            } else {
                res.status(404).send("Subscriber not found");
            }
        })
        .catch(error => res.status(400).send(error));
});


router.delete('/delete/:id', function (req, res, next) {
    let id = parseInt(req.params.id);

    Suscriptores.destroy({
        where: { id: id }
    })
        .then(rowsDeleted => {
            if (rowsDeleted > 0) {
                res.json({ message: "Subscriber deleted successfully" });
            } else {
                res.status(404).send("Subscriber not found");
            }
        })
        .catch(error => res.status(400).send(error));
});


module.exports = router;
