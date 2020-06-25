const mongoose = require('../database');


const ServicoSchema = new mongoose.Schema({

    observacao: {
        type: String,
        require: true,
    },
    numero_serie: {
        type: String,
        require: true,
    },
    defeito: {
        type: String,
        require: true,
    },
    produto: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        require: true,
    },
    data_hora: {
        type: Date,
        default: Date.now,
    }
});


const Servico = mongoose.model('Servico', ServicoSchema);

module.exports = Servico;