/////////////////////////////////////////////
//// API endpoints for managing exercises //
///////////////////////////////////////////

const router = require("express").Router();
let Exercise = require("../models/exercise.model");

// Your Challenge: Make five routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// You will be using express Router and Mongoose
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// 1. get all exercise logs on record
// GET: /
// ========================================
router.get("/", (req, res) => {
  Exercise.find()
    .then(data => res.json(data))
    .catch(err => {
      console.log("Heyyyyyy")
      return res.status(500).json(err)
    });
});

// 2. add a new exercise log
// POST: /add
// ========================================
router.post("/add", (req, res) => {
  Exercise.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(404).json(err));
});

// 3. retrieve a specfic exercise log
// GET: /:id
// ========================================
router.get("/:id", (req, res) => {
  Exercise.where({ _id: req.params.id }).findOne((err, data) => {
    if (err) return res.status(404).json(err);
    return res.json(data);
  });
});

// 4. delete a specfic exercise log
// DELETE: /:id
// ========================================
router.delete("/:id", (req, res) => {
  Exercise.deleteOne({ _id: req.params.id}).then(data => res.json(data)).catch(err => res.status(404).send(err));
})

// 5. retrieve a specific exercise log and update it
// with information sent by client on req body
// POST: /update/:id
// ========================================
router.post("/update/:id", (req, res) => {
  Exercise.findOneAndUpdate({ _id: req.params.id }, req.body, (err, data) => {
    if (err) return res.status(404).json(err);
    return res.json(data);
  })
})

module.exports = router;
