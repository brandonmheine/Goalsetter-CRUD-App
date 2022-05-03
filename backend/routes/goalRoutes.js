const express = require('express')
const router = express.Router()
const {
  getGoals, 
  setGoal, 
  updateGoal, 
  deleteGoal,
} = require('../controllers/goalController')

// These two lines are the same as the 4 lines below
router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

// router.get('/', getGoals)
// router.post('/', setGoal)
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)

module.exports = router