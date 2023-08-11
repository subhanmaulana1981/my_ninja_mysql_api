const mysql = require("mysql");
const config = require("../config");
const { SshTunnel } = require("ssh-tunneling");

/* hubungkan ke server mysql via ssh */
const sshConfig = config.tunnelConfig;
const client = new SshTunnel(sshConfig);
async function forwardViaSSH() {
    const forwardInfo = await client.forwardOut(
        "3306:127.0.0.1:3306"
    );
}

forwardViaSSH();

const koneksiViaSSH = mysql.createConnection(config.dbServer);
module.exports = { koneksiViaSSH };