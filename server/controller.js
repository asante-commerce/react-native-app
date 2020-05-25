const Model = require('./models');

const Controller = {
    getMainInfo: (req, res) => {
        Model.getMainInfo((err, data) => {
            if (err) {
                console.log('error from controller')
                res.status(400).end();
            } else {
                console.log('success from controller')
                res.json(data)
            }
        })
    },
    userLogin: (req, res) => {
        let info = req.body;
        Model.userLogin((err, data) => {
            if (err) {
                console.log('err from user login')
                res.status(400).end();
            } else {
                console.log('success from userlogin')
                res.json(data)
            }
        }, info)
    },
    userRegister: (req, res) => {
        let info = req.body
        Model.userRegister((err, data) => {
            if (err) {
                res.status(400).end();
            } else {
                res.send(data);
            }
        }, info)
    }
}


module.exports = Controller;