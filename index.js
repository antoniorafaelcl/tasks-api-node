const express = require("express");
const consign = require("consign");
const app = express();

//Carrega os arquivos
consign()
    .include("libs/config.js")
    .then("db.js")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);
