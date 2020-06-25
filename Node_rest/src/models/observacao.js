const mongoose = require('../database');


const ObsSchema = new mongoose.Schema({

    observacao: {
        type: String,
        require: true,
    }
});


const Obs = mongoose.model('Obs', ObsSchema);

module.exports = Obs;