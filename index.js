const express = require("express");
const bodyParser = require("body-parser");
const koneksiViaSSH = require("./services/database");
const cors = require("cors");
const routes = require("./routes/api");

/* application */
const app = express();
const port = 5135;
/* listener */
app.listen(port, () => {
    console.log(`kami mendengarkan di port ${port}`);
});

/* middleware(s) */

// cors server
/* var corsOption = {
    origin: "http://207.148.122.70:5135"
} */
// app.use(cors(corsOption));

// cors lokal
var corsOption = {
    origin: "http://127.0.0.1:5135"
}
app.use(cors(corsOption));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", routes);
/* app.use(function (err, req, res, next) {
    console.log(err);
    res.status(422).send({ error: err.message });
}); */

// http get starting point
app.get("/api", function (req, res) {
    res.send("Subhan Maulana made for CDC Global Informatika August 2023");
});