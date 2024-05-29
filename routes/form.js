const express = require("express");

const router = express.Router();

router.get("/form", (req, res, next) => {
  res.send(
    "<form action='/submitted'method='POST'><input name='email'/> <button>submit</button> </form>"
  );
});

module.exports=router