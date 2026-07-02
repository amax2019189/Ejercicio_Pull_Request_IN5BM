import { Personaje } from "./Personaje";

export class Mago extends Personaje{
    constructor(
        nombre: string,
        hp: number,
        ataque: number,
        public hechizo: number
    ){
        super(nombre, hp, ataque);
    }

    atacar(): number{
        const costoHechizo = 5;
        if(this.hechizo - costoHechizo){
               console.log(`${this.nombre} no tiene suficiente magia y ataca sin causar mucho daño`);
        return Math.floor(this.ataque / 2);
    }       
    this.hechizo -= costoHechizo;
    const danio = this.ataque * 2;
    console.log(`${this.nombre} ataca con su hechizo causando ${danio} de daño`);
    return danio;
    }


    habilidadEspecial(): void{
        const costoHechizo = 10;
        if(this.hechizo < costoHechizo){
            console.log(`${this.nombre} no tiene suficiente magia para usar su habilidad especial`);
            return;
        }
        this.hechizo -= costoHechizo;
        const danioEspecial = this.ataque * 3;
        console.log(`${this.nombre} usa "Bola de Fuego" su habilidad especial causando ${danioEspecial} de daño`);
    }  
}