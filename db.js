const mysql = require('mysql');
const settings = require('./settings.json');
const util = require('util');
const conn;
const qy;

function getQuery() {
    if (!conn) {
        conn = mysql.createConnection(settings);
    }
    conn.connect((error) => {
        if (error) throw error;
        console.log('Se estableció la conexión con la DB');
    });
    qy = util.promisify(conn.query);
    return qy;
};



module.exports = getQuery();