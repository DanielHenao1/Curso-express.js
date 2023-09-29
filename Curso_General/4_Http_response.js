// const express = require("express");
// const App = express();
// const puerto = 3000;

// // Respuesta texto
// App.get("/", (req, res) => {
//   res.send("Hola mundo");
// });

// // Respuesta archivos
// App.get("/miArchivo", (req, res) => {
//   res.sendFile("./JavaScript-logo.png", {
//     root: __dirname,
//   });
// });

// // Envio de JSON
// App.get("/user", (req, res) => {
//   res.json({
//     nombre: "Daniel",
//     apellido: "Henao",
//     edad: 40,
//     points: [1, 2, 3],
//     direccion: {
//       ciudad: "Bogota",
//       calle: "Calle 128c con Cra 55",
//     },
//   });
// });

// // Respuesta con codigo de estatus (solo el codigo)
// App.get("/status", (req, res) => {
//   res.sendStatus(204);
// });

// // Envía una respuesta con el código de estado 204 y un mensaje personalizado
// App.get("/status2", (req, res) => {
//   res.status(200).send("Mensaje personalizado para el código 200");
// });

// App.listen(puerto, () => {
//   console.log(`Servidor Express escuchando en el puerto ${puerto}`);
// });
