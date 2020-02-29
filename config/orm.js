var connection = require('./connection.js');

var orm = {
    //select all from table
    selectAll: function (tablename, cb) {

        connection.query('SELECT * FROM ??;', [tablename], function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    //insert into table
    insertOne: function (tablename, colname, burger_name, cb) {

        connection.query("INSERT INTO ?? (??) VALUES (?)", [tablename, colname, burger_name], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    //upadate table col to be devoured
    updateOne: function (tablename, colname, devoured, id, cb) {

        connection.query("UPDATE ?? SET ?? = ? WHERE id = ?", [tablename, colname, devoured, id], function (err, result) {
            if (err) throw err;
            cb(result);

        });
    },
    //delete from table
    deleteOne: function (tablename, id, cb) {

        connection.query("DELETE FROM ?? WHERE id = ?", [tablename, id], function (err, result) {
            if (err) throw err;
            cb(result);

        });
    },
};

//export orm
module.exports = orm;
