const express = require('express');

const Servico = require('../models/servico');


const router = express.Router();

//router.use(authMiddleware);

router.get('/:servcId', async (req, res) => {
    try {

        const service = await Servico.findById(req.params.servcId);
        return res.send({ service });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading new observation' });
    }
});

router.get('/', async (req, res) => {
    try {

        const service = await Servico.find();
        return res.send({ service });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading observation' });
    }
});

router.post('/', async (req, res) => {
    try {

        const service = await Servico.create(req.body);
        return res.send({ service });
    } catch (err) {
        return res.status(400).send({ error: 'Error creating new observation' });
    }
});

router.put('/:servcId', async (req, res) => {
    try {

        const service = await Servico.save(req.params.servcId, req.body, {new: true});
        return res.send({ service });
    } catch (err) {
        return res.status(400).send({ error: 'Error updating observation' });
    }
});

router.delete('/:servcId', async (req, res) => {
    try {

        const observation = await Servico.findByIdAndRemove(req.params.servcId);
        return res.send();
    } catch (err) {
        return res.status(400).send({ error: 'Error deleting observation' });
    }
});

module.exports = app => app.use('/projects_service', router);