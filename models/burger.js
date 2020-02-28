var orm = require('../config/orm.js');

var burger = {

    selectAll: function (cb) {
        orm.selectAll('burgers', function (res) {

            cb(res);
        });
    },

    insertOne: function (burger_name, cb) {
        orm.insertOne('burgers', 'burger_name', burger_name, function (res) {

            cb(res);

        });

    },

    updateOne: function (burger_id, cb) {
        orm.updateOne('burgers', 'devoured', true, burger_id, function (res) {

            cb(res)

        });
    }, deleteOne: function (burger_id, cb) {
        orm.updateOne('burgers', burger_id, function (res) {

            cb(res)

        });

    }
};

module.exports = burger;
