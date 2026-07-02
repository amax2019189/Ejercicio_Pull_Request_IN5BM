"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerrero = void 0;
const Personaje_1 = require("./Personaje");
class Guerrero extends Personaje_1.Personaje {
    constructor(nombre, hp, ataque, fuerza) {
        super(nombre, hp, ataque);
        this.fuerza = fuerza;
    }
    atacar() {
        const danio = this.ataque + this.fuerza;
        console.log(`${this.nombre} ataca con la espada del caos ${this.ataque} causando ${danio} de daño`);
        return danio;
    }
    habilidadEspecial() {
        const danioEspecial = this.fuerza * 2;
        console.log(`${this.nombre} usa "Ira" su habilidad especial causando ${danioEspecial} de daño`);
    }
}
exports.Guerrero = Guerrero;
