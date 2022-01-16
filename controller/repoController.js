const { Router } = require('express');
const newRepoService = require('../service/repoService')
const route = Router();
route.get('/', newRepoService.getRepositories );
module.exports = route;