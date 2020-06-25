const express = require('express');

const Observacao = require('../models/observacao');


const router = express.Router();

//router.use(authMiddleware);

router.get('/:obsId', async (req, res) => {
    try {

        const observation = await Observacao.findById(req.params.obsId);
        return res.send({ observation });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading new observation' });
    }
});

router.get('/', async (req, res) => {
    try {

        const observation = await Observacao.find();
        return res.send({ observation });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading observation' });
    }
});

router.post('/', async (req, res) => {
    try {

        const observation = await Observacao.create(req.body);
        return res.send({ observation });
    } catch (err) {
        return res.status(400).send({ error: 'Error creating new observation' });
    }
});

router.put('/:obsId', async (req, res) => {
    try {

        const observation = await Observacao.findByIdAndUpdate(req.params.obsId, req.body, {new: true});
        return res.send({ observation });
    } catch (err) {
        return res.status(400).send({ error: 'Error updating observation' });
    }
});

router.delete('/:obsId', async (req, res) => {
    try {

        const observation = await Observacao.findByIdAndRemove(req.params.obsId);
        return res.send();
    } catch (err) {
        return res.status(400).send({ error: 'Error deleting observation' });
    }
});

module.exports = app => app.use('/projects_obs', router);