const router = require("express").Router();
const photoService = require("../services/photoService.js");
const { getErrorMessage } = require("../utils/errorHelpers.js");

router.get("/", async (req, res) => {
  const posts = await photoService.getPosts().lean()
  res.render("photos", { posts });
});

router.get("/create", (req, res) => {
  res.render("photos/create");
});

router.post("/create", async (req, res) => {
  const photoData = {
    ...req.body,
    owner: req.user._id,
  };
  try {
    await photoService.create(photoData);
    res.redirect("/photos");
  } catch (err) {
    res.render("photos/create", { error: getErrorMessage(err) });
  }
});

module.exports = router;
