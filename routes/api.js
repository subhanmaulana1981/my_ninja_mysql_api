/* module(s) needed */
const mysql = require("mysql");
const express = require("express");
const router = express.Router();
const koneksiViaSSH = require("../services/database");
const { json } = require("body-parser");

/* routing */
// get a list of ninjas
router.get("/ninjas", function (req, res, next) {
    koneksiViaSSH.query("SELECT * FROM ninjas", function (err, results) {
        if (err) {
            throw err;
        }
        console.log(results);
        res.send(results);
    });
});

// get one ninja by id
router.get("/ninja/:id", function (req, res, next) {
    koneksiViaSSH.query(
        `SELECT * FROM ninjas WHERE id = ${req.params.id}`, 
        function (err, results) {
            if (err) {
                throw err;
            }
            console.log(results);
            res.send(results);
        }
    );    
});

// get a ninja sounds like
router.get("/ninja", function (req, res, next) {
    koneksiViaSSH.query(
        `SELECT * FROM ninjas WHERE nama LIKE "%${req.query.nama}%"`,
        function (err, results) {
            if (err) {
                throw err;
            }
            console.log(results);
            res.send(results);
        }
    );
});

// post a ninja
router.post("/ninja", function (req, res, next) {
    koneksiViaSSH.query(
        `
        INSERT INTO ninjas 
            (
                nama,
                ranking,
                isAvailable
            )
        VALUES 
            (
                ${JSON.stringify(req.body.nama)},
                ${JSON.stringify(req.body.ranking)},
                ${JSON.stringify(req.body.isAvailable)}
            )
        `,
        function (err, results) {
            if (err) {
                throw err;
            }
            console.log(results);
            res.send(results);
        }
    );
});

// put a ninja
router.put("/ninja/:id", function (req, res, next) {
    koneksiViaSSH.query(
        `
        UPDATE ninjas 
        SET 
            nama = ${JSON.stringify(req.body.nama)},
            ranking = ${JSON.stringify(req.body.ranking)},
            isAvailable = ${JSON.stringify(req.body.isAvailable)}
        WHERE id = ${req.params.id} 
        `,
        function (err, results) {
            if (err) {
                throw err;
            }
            console.log(results);
            res.send(results);
        }
    );
});

// delete a ninja by id
router.delete("/ninja/:id", function (req, res, next) {
    koneksiViaSSH.query(
        `DELETE FROM ninjas WHERE id = ${req.params.id}`,
        function (err, results) {
            if (err) {
                throw err;
            }
            console.log(results);
            res.send(results);
        }
    );
});


module.exports = router;