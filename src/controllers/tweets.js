const express = require('express');

const router = express.Router();

router.get('/a', async (req, res) => {
  try {
    // const legenda = await Legenda.create(req.body);

    return res.send({ "legenda": "a" });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});

module.exports = app => app.use('/tweets', router);