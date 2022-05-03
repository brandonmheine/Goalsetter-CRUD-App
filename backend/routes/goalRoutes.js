const express = require('express')
const router = express.Router()
const {
  getGoals, 
  setGoal, 
  updateGoal, 
  deleteGoal,
} = require('../controllers/goalController')

const {protect} = require('../middleware/authMiddleWare')

// These two lines are the same as the 4 lines below
router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)

// router.get('/', getGoals)
// router.post('/', setGoal)
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)

module.exports = router