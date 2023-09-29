const express = require("express");
const app = express();
const port = 3000;

// la url user_name es el parametro que se le pasa y despues se saca con req.params para que sea una url dinamica
app.get("/hello/:user_name", (req, res) => {
  console.log(typeof req.params.user_name); // para saber el tipo de dato que es req.params.user_name es un string
  console.log(req.params.user_name);
  res.send(`Hola ${req.params.user_name}`);
  // res.send(`Hola ${req.params.user_name.toLocaleUpperCase()}`); // para convertir un texto a mayuscula
});

// Ejemplo de url dinamica con parametros que sume numeros
app.get("/suma/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const suma = parseInt(num1) + parseInt(num2);
  console.log(suma);
  res.send(`La suma es ${suma}`);
});

// ejemplom de una url dinamica con un condicinal que devuelve una imagen
app.get("/users/:username/photo", (req, res) => {
  if (req.params.username === "juan") {
    return res.sendFile("./JavaScript-logo.png", {
      root: __dirname,
    });
  }
  res.send("No se encontro la foto");
});

// Ejemplo de resivir varios parametros en una misma url
app.get("/nombre/:nombre/apellido/:apellido", (req, res) => {
  console.log(req.params);
  res.send(`Hola ${req.params.nombre} ${req.params.apellido}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
