const express = require('express');
const router = express.Router();
const reviews = [];

router.get('/product/:productId', (req, res) => {
  const productId = req.params.productId;
  const productReviews = reviews.filter(review => review.productId === productId);
  res.json(productReviews);
});

router.post('/product/:productId', (req, res) => {
  const productId = req.params.productId;
  const review = req.body;
  review.productId = productId;
  reviews.push(review);
  res.status(201).json(review);
});

module.exports = router;
