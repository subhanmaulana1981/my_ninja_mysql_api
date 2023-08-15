const express = require("express");
const { urlencoded, json } = require("body-parser");
const cors = require("cors");
const routes = require("./routes/api");

const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageLocalDefault } = require("apollo-server-core");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");

const http = require("http");

/* application */
const app = express();
const port = 5135;
const httpServer = http.createServer(app);
const server = new ApolloServer({
    typeDefs, 
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer }),
        ApolloServerPluginLandingPageLocalDefault({ embed: true })
    ]
});

/* middleware(s) */

// cors server
var corsOption = {
    origin: "http://207.148.122.70:5135"
}
// app.use(cors(corsOption));

// cors lokal
/* var corsOption = {
    origin: "http://127.0.0.1:5135"
} */
app.use(cors(corsOption));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use("/api", routes);

// graphQL                                                                                                
async function startApolloServer () {
    await server.start();
    server.applyMiddleware({ app });
    // app.use("/api", graphqlHTTP());
    await new Promise((resolve) => {
        httpServer.listen({ port }, resolve);
    });
    console.log(`server graphql ready di port ${port}${server.graphqlPath}`);

    return { server, app }
}
startApolloServer();

// http get starting point
app.get("/api", function (req, res) {
    res.send("Subhan Maulana made for CDC Global Informatika August 2023");
});    