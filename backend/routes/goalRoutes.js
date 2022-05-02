const express = require('express')
const router = express.Router()
const {getGoals} = require('../controllers/goalController')
const {setGoal} = require('../controllers/goalController')
const {putGoal} = require('../controllers/goalController')
const {deleteGoal} = require('../controllers/goalController')

router.get('/', getGoals)

router.post('/', setGoal)

router.put('/:id', putGoal)

router.delete('/:id', deleteGoal)

module.exports = router