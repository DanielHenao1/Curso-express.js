const express = require("express");
const app = express();
const port = 3000;

// all funcionarian todos los metodos (get, put, patch, delete, port, etc...)
app.all("/info", (req, res) => {
  res.send("Server info");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
