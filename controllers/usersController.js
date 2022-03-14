// const express = require("express")
// const users = express.Router()
const db = require("../models");
const User = db.users;
const bcrypt = require("bcryptjs")

exports.index = async (req, res) => {
    const { username, email } = req.query
    if (username) {
        let foundUser = await User.findAll({ where: { username } })
        if (foundUser.length) res.status(200).send(foundUser)
        else res.status(404).json({ error: "No user associated with that username."})
    } else if (email) {
        const userEmail = await User.findAll({ where: { email } });
        if(userEmail.length) res.status(200).send(userEmail)
        else res.status(404).json({ error: "No user associated with that email address."})
    } 
    // This is prob not how this should function - if the user leaves the username field blank, it sends all users instead of an error msg
    else {
        let allUsers = await User.findAll()
        res.status(200).send(allUsers)
    }
}

exports.getById = async (req, res) => {
    let { id } = req.params;
    let user = await User.findByPk(id)
    if (user) res.status(200).send(user)
    else res.status(404).json({ error: "No user found"})
}

exports.login = async (req, res) => {
    const { password, email } = req.body
    let foundUser = await User.findAll({ where: { email } })
    if (!foundUser.length) {
        // errors.email = 'User not found!';
        res.status(404).json({error: "User not found!!"})
    } else {
        let originalPassword = foundUser[0].password
        console.log("originalPassword: ", originalPassword)
        console.log("password: ", password)

    //     bcrypt
    //         .compare(password, originalPassword)
    //         .then(isMatch => {
    //             if (isMatch) {
    //                 // user matched
    //                 console.log('matched!')
    //                 const { id, username } = user[0];
    //                 const payload = { id, username }; //jwt payload
    //                 // console.log(payload)

    //                 jwt.sign(payload, 'secret', { 
    //                     expiresIn: 3600 
    //                 }, (err, token) => {
    //                     res.json({
    //                     success: true,
    //                     token: 'Bearer ' + token
    //                     });
    //                 });
    //             } else {
    //                 // errors.password = 'Password not correct';
    //                 res.status(400).json({error: "Password is not correct!"});
    //             }
    //     }).catch(err => console.log(err));
    // }
}
// else res.status(404).json({ error: "No user associated with that username"})

exports.create = async (req, res) => {
    const { username, email, password } = req.body
    try{
        let newUser = await User.create({ username, email, password })
        res.status(200).json(newUser)
    } catch {
        res.status(500).json({ error: "Must provide username and email" })
    }
}

exports.update = async (req, res) => {
    const { id } = req.params;
    const { body } = req
    let user = await User.findByPk(id)
    if (!user) res.status(400).json({ message: `No user with id ${id} found`})
    await user.update(body)
    if (user) res.status(200).send(user)
    //need to figure out error handling here - maybe validations.js function?
    else res.status(400).json({ message: "Must include all fields!" })
}   

exports.deleteOne = async (req, res) => {
    let { id } = req.params;
    let result = await User.destroy({ where: { id } });
    if (result) res.status(200).json({ message: "Delete successful!" })
    else res.status(500).json({ message: "No User found to delete!" })
}