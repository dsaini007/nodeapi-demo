const express = require("express");
const { model } = require("mongoose");
const Route = express.Router();
const Model = require("../model/user");
const bcrypt = require("bcrypt");
const ObjectId = require('mongodb').ObjectId;

Route.post("/add", async(req, res) => {

    var dbUser = await Model.findOne({ $or: [{ email: req.body.email }, { phone: req.body.phone }] });
    console.log(">>>>>>>>>>>>>>>", dbUser)
    if (!dbUser) {
        const password = await bcrypt.hash(req.body.password, 10);
        req.body.password = password;
        var User = new Model(req.body);
        console.log(User);
        User.save()
            .then((user) => {
                res.status(200).json({ status: "Success", data: user });
            })
            .catch((error) => {
                res.status(400).json({ status: "Error" });
            });
    } else {
        res.status(400).json({ status: "Error", message: "Already registered" });
    }
});







Route.get('/getalldata', (req, res) => {
    Model.find((error, data) => {

        if (data) {
            res.status(200).json({ status: 'Success', data: data })
        } else {

            console.log(error)

        }
    })
})


module.exports = Route;