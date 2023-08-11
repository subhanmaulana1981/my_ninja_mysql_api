const express = require("express");
const { urlencoded, json } = require("body-parser");
const { koneksiViaSSH } = require("./services/database");
const cors = require("cors");
const routes = require("./routes/api");
const { ApolloServer, gql } = require("apollo-server-express");

/* graphQL */
const typeDefs = gql `type Query {
    hello: String
}`;
const resolvers = {
    Query: {
        hello: () => "Hello, world!",
    },
};
const server = new ApolloServer({
    typeDefs, resolvers
});

/* application */
const app = express();
const port = 5135;

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

app.use(urlencoded({ extended: true }));
app.use(json());
app.use("/api", routes);
/* app.use(function (err, req, res, next) {
    console.log(err);
    res.status(422).send({ error: err.message });
}); */

// listener
app.listen(port, () => {
    console.log(`kami ready di http://localhost/${port}${server.graphqlPath}`);
});

// graphQL
server.applyMiddleware({ app });

// http get starting point
app.get("/api", function (req, res) {
    res.send("Subhan Maulana made for CDC Global Informatika August 2023");
});