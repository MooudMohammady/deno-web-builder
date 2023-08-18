const userModel = require('../models/userModel')
const mongoose = require('mongoose');

const newUser = async (req, res) => {
    const {email, fullName, password} = req.body;

    let emptyFields = [];

    if(!email){
        emptyFields.push('Email');
    }
    if(!fullName){
        emptyFields.push('Full name');
    }
    if(!password){
        emptyFields.push('Password');
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }

      try {
        //check if email is already submitted because its the primary key
        const checkEmail = await userModel.findOne({email: email})
        if(checkEmail){
            res.status(400).json({ error: 'Email already exists.'})
        } else {
            const user = await userModel.create({email, fullName, password})
            res.status(200).json(user)
        }
      } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const login = async (req, res) => {
    const {email, password} = req.body;

    let emptyFields = [];

    if(!email){
        emptyFields.push('Email');
    }
    if(!password){
        emptyFields.push('Password');
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }

    try {
        //look for a document to match
        const user = await userModel.findOne({email: email})
        if(user){
            if(password == user.password){
                res.status(200).json(user)
            } else {
                res.status(400).json({ error: 'Passwords dont match.'})
            }
        } else {
            res.status(400).json({ error: 'No such email exists.'})
        }
    }  catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { newUser, login }

