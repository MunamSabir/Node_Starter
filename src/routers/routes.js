var express = require("express");
var router = express.Router();

const userRouter = require("./user.routes");

router.use("/v1/users", userRouter);

module.exports = router;
