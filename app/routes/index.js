'use strict';
const errorHandlingMiddleware = require('../lib/error-handling-middleware');
const { getSlotsByLocation, getSlots, connectionCheck } = require('../controllers/getSlotsByLocation');


module.exports = (app) => {
  app.post('/api/users/getSlotByLocation', getSlotsByLocation);
  app.post('/api/users/getSlots', getSlots);
  app.get('/', connectionCheck);
  app.use(errorHandlingMiddleware);
};

