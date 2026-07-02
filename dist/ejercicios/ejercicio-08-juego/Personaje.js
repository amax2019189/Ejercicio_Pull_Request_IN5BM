"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
class Personaje {
    constructor(nombre, hp, ataque) {
        this.nombre = nombre;
        this.hp = hp;
        this.ataque = ataque;
    }
    recibirDanio(danio) {
        this.hp -= danio;
        console.log(`${this.nombre} recibio ${danio} de daño. Vida restante: ${this.hp}`);
    }
    mostrarInformacion() {
        console.log(`${this.nombre}
      Vida: ${this.hp} 
      Ataque base: ${this.ataque} 
      Vivo: ${this.estaVivo()}`);
    }
    estaVivo() {
        return this.hp > 0;
    }
}
exports.Personaje = Personaje;
