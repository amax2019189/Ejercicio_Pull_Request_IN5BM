"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iniciarMenu = iniciarMenu;
const Arquero_1 = require("./Arquero");
const Guerrero_1 = require("./Guerrero");
const Mago_1 = require("./Mago");
const personajes = [
    new Arquero_1.Arquero("Green arrow", 100, 15, 80),
    new Guerrero_1.Guerrero("Kratos", 150, 20, 30),
    new Mago_1.Mago("Harry Potter", 80, 10, 50)
];
function iniciarMenu() {
    personajes.forEach((p) => p.mostrarInformacion());
}
