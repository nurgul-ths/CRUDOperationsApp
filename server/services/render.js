const axios = require('axios')
const { query } = require('express')

exports.home_route=(req, res) => {
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
        
        res.render('index', {users:response.data.data})
    }).catch(err=>{
        res.send(err)
    })
    }
exports.add_user=(req, res) => {
        res.render('add_user')
    }
exports.update_user=(req, res) => {
    axios.get('http://localhost:3000/api/users', {params: {id: req.query.id}}).then(
        function(userdata) {
            console.log(userdata.data.data)
            res.render('update_user', {user:userdata.data.data})
        }
    ).catch(err=>{
        res.send(err)
    })
    }