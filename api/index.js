import express from 'express';
import data from '../src/testData';

const router = express.Router();

// Reduce the array into an object with K/V lookup in cponstant time
const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {});

router.get('/contests', (req, res) => {
  res.send({ 
    contests: contests
  });
  console.info('API request from:', req.ip, 'at', Date());
});

export default router;