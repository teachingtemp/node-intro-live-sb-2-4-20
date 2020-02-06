const Models = require('../models');

module.exports = app => {
    app.get('/users', async (req, res) => {
      const users = await Models.findAllUsers();
      res.json(users);
    });

    app.get('/users/:id', async (req, res) => {
        const { id } = req.params;
        debugger
        const user = await Models.findUser(id);
        res.json(user)
    })
}