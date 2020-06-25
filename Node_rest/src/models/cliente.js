const mongoose = require('../database');


const ClientSchema = new mongoose.Schema({

    nome: {
        type: String,
        require: true,
    },
    cpf: {
        type: String,
        require: true,
    },
    endereco: {
        type: String,
        require: true,
    },
    telefone: {
        type: String,
        require: true,
    },bairro: {
        type: String,
        require: true,
    },numero: {
        type: String,
        require: true,
    },
    data: {
        type: Date,
        default: Date.now,
    }
});



const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;