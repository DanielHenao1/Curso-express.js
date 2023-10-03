// Configuracion de (Template_Engines)

router.all("/about", (req, res) => {
  const title = "Mi pagina creada desde express";
  res.render("index", { title });
});
