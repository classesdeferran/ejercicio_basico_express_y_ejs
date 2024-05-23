const express = require("express");
const app = express();

const port = 3000;

app.set("view engine", "ejs");
// app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  //   res.sendFile('index.html', {root: __dirname + '/public'});
  res.render("index", {
    titulo: "index",
    parrafo: "soy un texto EJS",
    footer: "Soy el footer de index",
  });
});
app.get("/alumnos", (req, res) => {
  //   res.sendFile('index.html', {root: __dirname + '/public'});
  res.render("alumnos", {
    titulo: "alumnos",
    parrafo: "soy un texto EJS",
    footer: "Soy el footer de alumnos",

  });
});
app.get("/cursos", (req, res) => {
  //   res.sendFile('index.html', {root: __dirname + '/public'});
  res.render("cursos", {
    titulo: "cursos",
    parrafo: "soy un texto EJS",
  });
});

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
