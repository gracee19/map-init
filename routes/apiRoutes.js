const axios = require("axios");
const router = require("express").Router();
const userRoute = require("./userRoute");

router.get("/country",(res, req) => {
    console.log(req.query);
});


router.use("/user", userRoute);

module.exports = router;