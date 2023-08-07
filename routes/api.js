/* module(s) needed */
const mysql = require("mysql");
const express = require("express");
const router = express.Router();
const koneksiViaSSH = require("../services/database");

/* routing */
router.get("/ninjas", function (req, res, next) {
    koneksiViaSSH.query("SELECT * FROM ninjas", function (err, results) {
        if (err) {
            throw err;
        }
        console.log(results);
        res.send(results);
    })
});

module.exports = router;