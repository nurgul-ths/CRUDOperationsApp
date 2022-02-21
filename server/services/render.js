const axios = require('axios')

exports.home_route = (req, res) => {
    axios.get('http://localhost:3000/')
    .then(function(response) {
        res.render('index', {users: response.data.data})
    }).catch(err=> {
        res.send(err)
    })
}