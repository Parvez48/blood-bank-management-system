const express = require("express");
const router = express.Router();
const BloodRequest = require("../models/Request");
const verifyToken = require("../middleware/auth");

router.post("/", verifyToken, async (req, res) => {
  const { fullName, phone, bloodGroup, location } = req.body;

  // Optional: check all fields are provided
  if (!fullName || !phone || !bloodGroup || !location) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const bloodRequest = new BloodRequest({
      userId: req.userId,
      fullName,
      phone,
      bloodGroup,
      location,
    });

    await bloodRequest.save();
    res.status(201).json({ message: "Request submitted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


router.get("/my", verifyToken, async (req, res) => {
  try {
    const requests = await BloodRequest.find({ userId: req.userId }).sort({
      date: -1,
    });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: "Failed to get requests" });
  }
});

module.exports = router;
