//////////////////////////////////////////
///   api endpoints for managing users //
////////////////////////////////////////

const router = require("express").Router();
let User = require("../models/user.model");

// Your Challenge: Make rwo routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// You will be using express Router and Mongoose
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// 1. get all users on record
// GET: /
// ========================================
router.get("/", (req, res) => {
  User.find().then(data => res.json(data)).catch(err => res.status(500).json(err))
});

// 2. add a new user
// POST /
// ========================================
router.post("/add", (req, res) => {
  User.create(req.body).then(data => res.json(data)).catch(err => res.status(404).json(err))
})

module.exports = router;
