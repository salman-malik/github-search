var axios = require('axios');

module.exports = {
    getProfile: function(username){
        console.log('are we getting inside getProfile func');
        return axios.get('https://api.github.com/users/' + username)
          .then(function(user){
            return user.data
          });
      },
      
    getRepos: function(username){
        return axios.get('https://api.github.com/users/' + username + '/repos')
          .then((user) => {
            return user.data;
          });
      },
  };