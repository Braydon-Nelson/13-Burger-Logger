var mysql = require('mysql');

// create the connection to db
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: process.env.MYSQL_PASSWORD,
        database: 'burgers_db'
    });
}

// connect to db
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

// export connection
module.exports = connection;
