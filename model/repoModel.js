const axios = require("axios");

// Conexão com a API do Github
const axiosConnect = () => {
  return axios({
    method: "get",
    url: `https://api.github.com/users/takenet/repos`,
  });
};

// JSON de retorno da API do Github
const repoList = async () => {
  return axiosConnect().then((response) => {
    return response.data.map((repo) => {
      return {
        avatar: repo.owner.avatar_url,
        name: repo.full_name,
        description: repo.description,
        language: repo.language,
        date: repo.created_at
      }
    }) 
  })
};

module.exports = {
    repoList,
};