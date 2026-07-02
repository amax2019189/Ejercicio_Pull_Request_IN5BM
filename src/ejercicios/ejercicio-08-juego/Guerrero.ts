import { Personaje } from "./Personaje";

export class Guerrero extends Personaje{
    constructor(
        nombre: string,
        hp: number,
        ataque: number,
        public fuerza: number
    ){
        super(nombre, hp, ataque);
    }

    atacar(): number{
        const danio = this.ataque + this.fuerza;
        console.log(`${this.nombre} ataca con la espada del caosvcon ataque de ${this.ataque} causando ${danio} de daño`);
        return danio;
    }


    habilidadEspecial(): void{
        const danioEspecial = this.fuerza * 2;
        console.log(`${this.nombre} usa "Ira" su habilidad especial causando ${danioEspecial} de daño`);
    }
}