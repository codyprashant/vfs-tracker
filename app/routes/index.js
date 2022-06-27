'use strict';
const errorHandlingMiddleware = require('../lib/error-handling-middleware');
const { getSlotsByLocation, getSlots } = require('../controllers/getSlotsByLocation');


module.exports = (app) => {
  app.post('/api/users/getSlotByLocation', getSlotsByLocation);
  app.get('/api/users/getSlots', getSlots);
  app.use(errorHandlingMiddleware);
};

