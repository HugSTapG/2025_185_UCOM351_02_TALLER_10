const express = require('express');
const router = express.Router();

// @ts-ignore
const { Sequelize, Op } = require('sequelize');
const Suscriptores = require('../models').suscriptores;
const Intereses = require('../models').intereses;

router.get('/findAll/view', function (req, res, next) {
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
            res.render('suscriptores', { title: 'Suscriptores', arrSuscriptores: suscriptores });
        })
        .catch(error => res.status(400).send(error))
});

module.exports = router;
