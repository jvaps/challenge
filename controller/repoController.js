const { Router } = require('express')
const newRepoService = require('../service/repoService')
const route = Router()
route.get('/:index?', newRepoService.getRepositories )
module.exports = route