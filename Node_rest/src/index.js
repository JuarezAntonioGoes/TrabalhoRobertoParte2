const express = require('express');
const bodyParse = require('body-parser');

const app = express();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

require('./controllers/auth.Controller')(app);


require('./controllers/projectcontroller_service')(app);

require('./controllers/projectcontroller_obs')(app);

require('./controllers/projectcontroller')(app);

app.listen(3000);