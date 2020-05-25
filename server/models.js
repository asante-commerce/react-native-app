const db = require('../database/index');
const Model = {
    getMainInfo: (callback) => {
        const query = 'SELECT * FROM trending';

        db.query(query, (err, data) => {
            if (err) {
                callback(err);
            } else {
                callback(null, data)
            }
        })
    },
    userLogin: (callback, info) => {
        const query = `SELECT * FROM users WHERE username = '${info.username}' AND password = '${info.password}'`;
        db.query(query, (err, data) => {
            let { rows } = data; 
            if (err) {
                callback(err);
            } 
            if (rows.length > 0) {
                callback(null, {success: 'true', user: rows[0].username})
            } else {
                callback(null, {success: 'false', message: 'user not found'})
            }
        })
    },
    userRegister: (callback, info) => {
        const query = `INSERT INTO users (username, firstname, lastname, password) VALUES (${info.username}, ${info.firstname},${info.lastname}, ${info.password})`

        db.query(query, (err, data) => {
            if (err) {
                callback(err);
            } else {
                callback(null, data);
            }
        })
    }
};


module.exports = Model;