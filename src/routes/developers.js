const { Router } = require('express');
const DevController = require('../controllers/devController');

const routes = Router();

routes.get("/developers", DevController.index);

routes.get("/developers/:id", DevController.show);

routes.post("/developers", DevController.store);

routes.put("/developers/:id", DevController.update);

routes.delete("/developers/:id", DevController.destroy);

module.exports = routes;