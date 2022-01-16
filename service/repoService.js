repoModel = require('../model/repoModel.js')

const getRepositories = async (req, res) => {
  //Cria um index a cada repo
  let { index } = req.params
  //Requisição de todos os repositórios
  let repos = await repoModel.repoList()
  //Faz o filtro dos valores baseado em uma string com a linguagem escolhida, no caso, C#
  repos = repos.filter(
    (repo) => repo.language === 'C#'
    )
    // Transforma a string de data em Date e subtrai, tendo um valor negativo, positivo ou zero
    // Colocando a data mais antiga em primeiro, ou seja, em ordem crescente
    repos.sort(function(a,b){
      return new Date(a.date) - new Date(b.date)
    })
  return res.status(200).json(repos[index])
}

module.exports = {
  getRepositories
}