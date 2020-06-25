const express = require('express');

const Cliente = require('../models/cliente');


const router = express.Router();

//router.use(authMiddleware);

router.get('/:clientId', async (req, res) => {
    try {

        const clientes = await Cliente.findById(req.params.clientId);
        return res.send({ clientes });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading new project' });
    }
});

router.get('/', async (req, res) => {
    try {

        const clientes = await Cliente.find();
        return res.send({ clientes });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading project' });
    }
});

router.post('/', async (req, res) => {
    try {

        const cliente = await Cliente.create(req.body);
        return res.send({ cliente });
    } catch (err) {
        return res.status(400).send({ error: 'Error creating new project' });
    }
});

router.put('/:clientId', async (req, res) => {
    try {

        const cliente = await Cliente.findByIdAndUpdate(req.params.clientId, req.body, {new: true});
        return res.send({ cliente });
    } catch (err) {
        return res.status(400).send({ error: 'Error updating project' });
    }
});

router.delete('/:clientId', async (req, res) => {
    try {

        const clientes = await Cliente.findByIdAndRemove(req.params.clientId);
        return res.send();
    } catch (err) {
        return res.status(400).send({ error: 'Error deleting project' });
    }
});

module.exports = app => app.use('/projects', router);