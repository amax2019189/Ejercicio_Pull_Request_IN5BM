import { Personaje } from "./Personaje";

export class Arquero extends Personaje{
    constructor(
        nombre: string,
        hp: number,
        ataque: number,
        public precision: number
    ){
        super(nombre, hp, ataque);
    }

    atacar(): number{
        const acierto =  Math.random() * 100 <= this.precision;
        if(!acierto){
            console.log(`${this.nombre} falla su ataque.`);
            return 0;
        }
        const danio = this.ataque + (this.precision / 10);
        console.log(`${this.nombre} ataca con su arco causando ${danio} de daño`);
        return danio;
    }

    habilidadEspecial(): void{
        const flechas = 3;
        const danioFlecha = this.ataque /2;
        console.log(
         `${this.nombre} usa la lluvia de Flechas disparando ${flechas} flechas de ${danioFlecha} de daño cada una`
        );    
    }
}   