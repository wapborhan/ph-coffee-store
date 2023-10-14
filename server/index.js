const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3300;

// MIddleware configuration
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`App Running on port ${port}`);
});
