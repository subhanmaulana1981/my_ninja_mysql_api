const { gql } = require("apollo-server-express");

const typeDefs = gql `
    type Ninja {
        id: Int
        nama: String
        ranking: String
        isAvailable: Int
    }

    type Query {
        ninjas: [Ninja]
    }
`

module.exports = { typeDefs };