const express = require("express")
const movies = express.Router()
const axios = require('axios');
const KEY = process.env.KEY

movies.get("/", (req, res) => {
    res.json("This is the /movies route")
})

movies.get("/search", (req, res) => {
    axios.get("https://api.themoviedb.org/3/search/movie?api_key=99fdd78beedc847a99f420187e092842&language=en-US&query=matrix&page=1&include_adult=false")
    .then(response => {
        console.log(response.data.results)
        res.send(response.data.results)
    })
})

module.exports = movies