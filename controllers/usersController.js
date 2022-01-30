// const express = require("express")
// const users = express.Router()
const db = require("../models");
const User = db.users;

exports.getAll = (req, res) => {
    const { username } = req.query
    User.findAll({
        where: username ? { username } : {}
    })
    .then(data => {
        res.status(200).json(data)
    })
}

exports.getOne = async (req, res) => {
    let { id } = req.params;
    let user = await User.findByPk(id);
    if(user){
        res.status(200).send(user);
    } else {
        res.status(404).json({ error: "No user with that id exists!"})
    }
    // const user = User.findOne({
    //     where: { username }
    // });
    // if(user){
    //     res.status(200).send(user);
    // } else {
    //     res.status(404).json({ error: "No user with that username exists!"})
    // }
}

exports.create = (req, res) => {
    const { username, email, password } = req.body
    User.create({
        username, email, password
    })
    .then(data => {
        res.json(data)
    })
    .catch(error => res.json({error: error.errors[0].message}))
}

exports.deleteOne = async (req, res) => {
    let { id } = req.params;
    try{
        let result = await User.destroy({
            where: { id }
        });
        console.log(result);
    }catch(err){
        res.send({ message: err });
        next();
    }
    res.send({message: "Yay!!!"});
}

// Delete works, but having trouble understanding if an error occurs