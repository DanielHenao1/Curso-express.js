const express = require("express");
const app = express();
const port = 3000;

app.get("/hello/:username", (req, res) => {
  console.log(req.query);
  res.send(`Hello ${req.params.username.toLocaleUpperCase()}`);
});

// Asi se realiza una query desde el url (http://localhost:3000/search?q=Javascript books)
app.get("/search", (req, res) => {
  if (req.query.q === "Javascript books") {
    res.send("Lista de libros javascript");
  } else {
    res.send("Los libros no se encuentran disponibles");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
