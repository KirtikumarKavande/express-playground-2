const express = require("express");
const path = require("path");
const app = express();
app.use(
  express.static(


    path.join(
        path.dirname(require.main.filename),
        "htmlPages",
        "htmlPage1.html"
      )
  )
);

const router = express.Router();
router.post("/submitted", (req, res) => {
  console.log(req.body);
  //   res.status(200).sendFile(path.join(__dirname,'..','htmlPages','htmlPage1.html'))
  res
    .status(200)
    .sendFile(
      path.join(
        path.dirname(require.main.filename),
        "htmlPages",
        "htmlPage1.html"
      )
    );
});

module.exports = router;
