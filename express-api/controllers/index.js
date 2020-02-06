const bodyParser = require('body-parser');
const Models = require('../models');

const jsonParser = bodyParser.json();

const logRoutePath = require('../middlewares/log-route-middleware');

module.exports = app => {
    app.use(logRoutePath);
    // app.use(jsonParser); use body parsing for all routes

    app.get('/users', async (req, res) => {
      const users = await Models.findAllUsers();
      res.json(users);
    });

    app.post('/users', jsonParser, async (req, res) => {
      console.log(req.body);
      const user = new Models.User(req.body);
      const userObj = await user.save();
      res.json(userObj);
    })

    //app.patch('/users')

    app.get('/users/:id', async (req, res) => {
        const { id } = req.params;
        const user = await Models.findUser(id);
        res.json(user)
    })

    app.get('/comments', async (req, res) => {
      const users = await Models.findAllComments();
      res.json(users);
    });

    app.get('/comments/:id', async (req, res) => {
        const { id } = req.params;
        const user = await Models.findComment(id);
        res.json(user)
    })
}