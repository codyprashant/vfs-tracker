'use strict';

const LocationRecord = require('../models/locationRecord');



const getSlotsByLocation = async (req, res, next) => {
  try {
    let data = await LocationRecord.find({ locationCode: req.body.locationCode }).sort({createdAt: 'descending'});
    res.json({ message: data, status:"SUCCESS" });
  } catch (error) {
    next(error);
  }
};

const getSlots = async (req, res, next) => {
  try {
    let completeData = []
    for(let i = 0; i < 8; i++){
      let data = await LocationRecord.find({ locationCode: i }).sort({createdAt: 'descending'});
      if(data) {
        completeData.push(data[0])
      }
    }
    res.json({ message: completeData, status:"SUCCESS" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSlotsByLocation,
  getSlots
};
