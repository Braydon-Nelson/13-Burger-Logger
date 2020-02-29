var orm = require('../config/orm.js');

var burger = {
    // select all burgers
    selectAll: function (cb) {
        orm.selectAll('burgers', function (res) {
            cb(res);
        });
    },
    //add a burger to the list
    insertOne: function (burger_name, cb) {
        orm.insertOne('burgers', 'burger_name', burger_name, function (res) {
            cb(res);
        });
    },
    //mark burger as devoured
    updateOne: function (burger_id, cb) {
        orm.updateOne('burgers', 'devoured', true, burger_id, function (res) {
            cb(res)
        });
    },
    //delete burger
    deleteOne: function (burger_id, cb) {
        orm.deleteOne('burgers', burger_id, function (res) {
            cb(res)
        });
    }
};

module.exports = burger;
