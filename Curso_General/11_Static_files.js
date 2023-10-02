// // Para este ejercicio creamos en la carpeta static (index.css) - (index.js)

// const express = require("express");
// const morgan = require("morgan");

// // Si tubieramos todo en una carpeta (src) deberiamos utilizar este modulo para enrutar
// const path = require("path");

// const app = express();

// app.use(express.json());
// app.use(morgan("dev"));

// app.post("/profile", (req, res) => {
//   console.log(req.body);
//   res.send("Profile page");
// });

// app.all("/about", (req, res) => {
//   res.send("About page");
// });

// app.use((req, res, next) => {
//   if (req.query.login === "daniel@gmail.com") {
//     next();
//   } else {
//     res.send("No autorizado");
//   }
// });

// app.get("/dashboard", (req, res) => {
//   res.sendFile("Dashboard page");
// });

// // Estas rutas es cuando tenemos todo en carpetas individuales pero cuando tenemos todo en (src)
// // app.use(express.static("public"));
// // app.use("/public", express.static("./public"));
// // app.use("/uploads", express.static("./uploads"));

// // Para ver nuestra ruta actual podemos utilizar (__dirname)
// console.log(__dirname);

// app.use("/public", express.static(path.join(__dirname, "public")));
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// const port = 3000;
// app.listen(port, () => {
//   console.log(`el servidor esta escuchando por el puerto ${port}`);
// });
