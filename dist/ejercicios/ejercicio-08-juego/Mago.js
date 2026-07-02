"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
const Personaje_1 = require("./Personaje");
class Mago extends Personaje_1.Personaje {
    constructor(nombre, hp, ataque, hechizo) {
        super(nombre, hp, ataque);
        this.hechizo = hechizo;
    }
    atacar() {
        const costoHechizo = 5;
        if (this.hechizo - costoHechizo) {
            console.log(`${this.nombre} no tiene suficiente magia y ataca débilmente.`);
            return Math.floor(this.ataque / 2);
        }
        this.hechizo -= costoHechizo;
        const danio = this.ataque * 2;
        console.log(`${this.nombre} ataca con su hechizo causando ${danio} de daño`);
        return danio;
    }
    habilidadEspecial() {
        const costoHechizo = 10;
        if (this.hechizo < costoHechizo) {
            console.log(`${this.nombre} no tiene suficiente magia para usar su habilidad especial`);
            return;
        }
        this.hechizo -= costoHechizo;
        const danioEspecial = this.ataque * 3;
        console.log(`${this.nombre} usa "Bola de Fuego" su habilidad especial causando ${danioEspecial} de daño`);
    }
}
exports.Mago = Mago;
