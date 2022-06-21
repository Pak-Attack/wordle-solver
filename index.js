const express = require("express");
const path = require("path");

const PORT = 3007;
const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public")));

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});
