import express from 'express';
import data from '../src/testData';

const router = express.Router();

router.get('/contests', (req, res) => {
  res.send({ contests: data.contests});
  console.info('API request from:', req.ip, 'at', Date());
});

export default router;