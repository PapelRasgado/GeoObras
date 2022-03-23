const express = require("express");
const routes = express.Router();

const layersController = require("./controllers/layersController");

//Rotas para consultas espaciais básicas
routes.get("/layer/:layer", (req, res) => {
  return redirect(req, res, layersController.layers);
});

const redirect = (req, res, route) => {
  try {
    return route(req, res);
  } catch {
    return res.status(500).json({ mensagem: "Ocorreu um erro interno!" });
  }
};

module.exports = routes;
