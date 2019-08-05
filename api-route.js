const express = require('express');
const router = express.Router();

router.get('/timestamp/:date_string', (req, res) => {
  res.json(dateValidator(req.params.date_string));
});

const dateValidator = dateString => {
  let date;
  if (+dateString) {
    date = new Date(+dateString);
  } else if (dateString === undefined) {
    date = new Date();
  } else {
    date = new Date(dateString);
  }
  if (date.getTime() === NaN || date.toUTCString() === 'Invalid Date') {
    return { error: 'Invalid Date' };
  } else {
    return { unix: date.getTime(), utc: date.toUTCString() };
  }
};

module.exports = router;