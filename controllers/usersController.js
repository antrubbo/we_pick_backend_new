// const express = require("express")
// const users = express.Router()
const db = require("../models");
const User = db.users;

exports.getAll = async (req, res) => {
    const { username } = req.query
    // res.send(username)
    let foundUser = await User.findAll({
        where: { username }
    })
    console.log(foundUser)
    // .then(data => {
    //     res.send(data)
    // })
    // .catch((error) => {
    //     res.json(error)
    // })
}

exports.getOne = async (req, res) => {
    let { id } = req.params;
    // let { username, email } = req.query 

    let userId = await User.findByPk(id)
    if (userId) res.status(200).send(user)
    else res.status(404).json({ error: "No user with that id exists!"})

    // should use findOne?
    // const userName = User.findAll({ where: { username } });
    // if(userName) res.status(200).send(userName)
    // else res.status(404).json({ error: "No user with that username exists!"})

    //email search not working, may be different method
    const userEmail = User.findAll({ where: { email } });
    if(userEmail) res.status(200).send(userEmail)
    else res.status(404).json({ error: "No user associated with that email address."})
}

exports.login = async (req, res) => {

}

exports.create = (req, res) => {
    const { username, email, password } = req.body
    // should use findOrCreate? how to make async/await?
    User.create({
        username, email, password
    })
    .then(data => {
        res.json(data)
    })
    .catch(error => res.json({error: "Must provide username and email"}))
}

exports.update = async (req, res) => {

}

exports.deleteOne = async (req, res) => {
    let { id } = req.params;
    let result = await User.destroy({ where: { id } });
    if (result) res.status(200).json({ message: "Delete successful!" })
    else res.status(500).json({ message: "No User found to delete!" })
}