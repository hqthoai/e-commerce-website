const express = require("express");
const PORT = 3001;

const app = express();
app.use("/", (req, res) => {
  res.send("Have a nice day !");
});

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}!`);
});
