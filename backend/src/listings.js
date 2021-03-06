const express = require('express');
const monk = require('monk');
const joi = require('joi');

const router = express.Router();

const schema = joi.object({
  title: Joi.string().trim().required(),
  address: Joi.string().trim().required(),
  type: Joi.string().trim().required(),
  description: Joi.string().trim().required(),
  price: Joi.integer(),
  rooms: Joi.integer(),
});

const db = monk(process.env.MONGO_DB);
const listings = db.get('listings'); // collection name

router.get('/', async (req, res, next) => {
  try {
    const items = await listings.find({});
    res.status = 200;
    res.json(items);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const validate = await schema.validateAsync(req.body);
    const inserted = listings.insert(validate);
    res.json(inserted);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const validated = await schema.validateAsync(req.body);
    const item = await listings.findOne({
      _id: id,
    });
    if (!item) {
      next();
    }
    const updated = await listings.update(
      {
        _id: id,
      },
      validated
    );
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    await listings.delete({ _id: id });
    res.status(200).send('Yay you deleted a listing successfully!');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
