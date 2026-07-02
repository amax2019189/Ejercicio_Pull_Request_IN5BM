"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arquero = void 0;
const Personaje_1 = require("./Personaje");
class Arquero extends Personaje_1.Personaje {
    constructor(nombre, hp, ataque, precision) {
        super(nombre, hp, ataque);
        this.precision = precision;
    }
    atacar() {
        const acierto = Math.random() * 100 <= this.precision;
        if (!acierto) {
            console.log(`${this.nombre} falla su ataque.`);
            return 0;
        }
        const danio = this.ataque + (this.precision / 10);
        console.log(`${this.nombre} ataca con su arco causando ${danio} de daño`);
        return danio;
    }
    habilidadEspecial() {
        const flechas = 3;
        const danioFlecha = this.ataque / 2;
        console.log(`${this.nombre} usa la lluvia de Flechas disparando ${flechas} flechas de ${danioFlecha} de daño cada una`);
    }
}
exports.Arquero = Arquero;
