const express = require("express")
const movies = express.Router()
const axios = require('axios');

require('dotenv').config()
const KEY = process.env.KEY

movies.get("/", (req, res) => {
    res.json("This is the /movies route")
})

movies.get("/search", (req, res) => {
    const { title } = req.query
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${title}&page=1&include_adult=false`)
    .then(response => { res.send(response.data.results)})
    .catch(response => response.status(422).json( {error: "No results to display!"} ))
})

movies.get("/:id", (req, res) => {
    const { id } = req.params
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US&append_to_response=videos`)
    .then(response => res.send(response.data))
    .catch(response => response.status(404).json( {error: "No movie with that ID!"} ))
})

module.exports = movies