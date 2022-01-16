const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const newRepoController = require('./controller/repoController.js')
app.use('/', newRepoController);
app.use(cors())
app.use(bodyParser.json());




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));