// @desc Get goals
// @route GET api/goals
// @access Private
const getGoals = (req, res) => {
  res.status(200).json({message: 'Get goals'})
}

// @desc Set goal
// @route POST api/goals
// @access Private
const setGoal = (req, res) => {
  res.status(200).json({message: 'Set goal'})
}

// @desc Update goal
// @route PUT api/goals
// @access Private
const putGoal = (req, res) => {
  res.status(200).json({message: 'Update goal'})
}

// @desc Delete goal
// @route Delete api/goals
// @access Private
const deleteGoal = (req, res) => {
  res.status(200).json({message: 'Delete goal'})
}

module.exports = {
  getGoals, setGoal, putGoal, deleteGoal
}