const express = require('express')
const router = express.Router()
const Transaction = require('../models/Transaction')
const auth = require('../middleware/auth')

router.get('/', auth, async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id })
    res.json(transactions)
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
})

router.post('/', auth, async (req, res) => {
  try {
    const { title, amount, type, category, date } = req.body
    const transaction = await Transaction.create({
      user: req.user.id,
      title, amount, type, category, date
    })
    res.json(transaction)
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
})

router.delete('/:id', auth, async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id)
    res.json({ message: 'Deleted!' })
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
})

module.exports = router