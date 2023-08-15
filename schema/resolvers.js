const { koneksiViaSSH } = require("../services/database");
var NinjaList = [];

const resolvers = {
    Query: {
        ninjas () {
            // database
            var stringQuery = "SELECT * FROM ninjas";
            koneksiViaSSH.query (stringQuery, function (err, results) {
                if (err) {
                    throw err;
                }
                
                NinjaList = [...results];
            });    
            
            // console.log(NinjaList);
            return NinjaList;
        }
    }
}

module.exports = { resolvers };