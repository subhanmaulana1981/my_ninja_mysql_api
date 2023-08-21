const { gql } = require("apollo-server-express");

const typeDefs = gql `
    type Ninja {
        idNinja: Int
        namaNinja: String
        ranking: String
        isAvailable: Int
        ninjaShifu: Shifu
    }

    type Shifu {
        idShifu: Int
        namaShifu: String
    }

    type Query {
        ninjas: [ Ninja ]
    }
`

module.exports = { typeDefs };