const express = require("express");
const router = express.Router();
const Donation = require("../models/Donation");
const verifyToken = require("../middleware/auth");
const User = require("../models/User");


router.post("/", verifyToken, async (req, res) => {
  const { fullName, phone, bloodGroup, location } = req.body;

  if (!fullName || !phone || !bloodGroup || !location) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const user = await User.findById(req.userId);

    const donation = new Donation({
      userId: req.userId,
      donorEmail: user.email, // optional
      fullName,
      phone,
      bloodGroup,
      location,
    });

    await donation.save();
    res.status(201).json({ message: "Donation submitted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});



// Public route - no auth needed
router.get("/public", async (req, res) => {
  try {
    const recentDonors = await Donation.find({})
      .sort({ date: -1 })
      .limit(20); // Show recent 20 donors

    res.json(recentDonors);
  } catch (err) {
    res.status(500).json({ message: "Error fetching donor list" });
  }
});


router.get("/my", verifyToken, async (req, res) => {
  try {
    const donations = await Donation.find({ userId: req.userId }).sort({
      date: -1,
    });
    res.json(donations);
  } catch (err) {
    res.status(500).json({ message: "Failed to get donations" });
  }
});

module.exports = router;
