var express = require("express");
const {
  CreateUser,
  UpdateUser,
  GetAll,
  Login,
} = require("../controllers/userController");
var router = express.Router();

router.post("/login", Login);
router.post("", CreateUser);
router.patch("/:id", UpdateUser);
router.get("", GetAll);

module.exports = router;
