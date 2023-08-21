const { koneksiViaSSH } = require("../services/database");
var NinjaList = [];
var ShifuList = [];

/* var ArmorList = [];
var NinjaArmorList = []; */

const resolvers = {
    Query: {
        ninjas () {
            // database
            var stringQuery = `SELECT * FROM ninjas`;
            koneksiViaSSH.query (stringQuery, function (err, results) {
                if (err) {
                    throw err;
                }
                
                NinjaList = [...results];
            });    
            
            console.log(NinjaList);
            return NinjaList;
        },
    },

    Ninja: {
        ninjaShifu: (parent, args) => {
            console.log("ini parent");
            console.log(parent);

            /* parent.forEach(ninja => {
                const stringNamaShifu = parent.namaShifu;

                // get shifuList then
                var stringQuery = `SELECT * FROM shifus WHERE namaShifu = '${stringNamaShifu}'`;
                koneksiViaSSH.query (stringQuery, function (err, results) {
                    if (err) {
                        throw err;
                    }
    
                    ShifuList = [...ShifuList];
                });
    
                return ShifuList;                
            }); */
        }
    }
}

module.exports = { resolvers };