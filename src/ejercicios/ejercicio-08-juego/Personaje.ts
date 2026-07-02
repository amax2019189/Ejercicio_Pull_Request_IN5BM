export abstract class Personaje{
    constructor(
        public nombre: string,
        public hp : number,
        public ataque: number
    ){}
    abstract atacar(): number;
    abstract habilidadEspecial(): void;
    

    recibirDanio(danio: number): void{
        this.hp -= danio;
        console.log(
            `${this.nombre} recibio ${danio} de daño. Vida restante: ${this.hp}`
        );
    }

    mostrarInformacion(): void{
      console.log(
      `${this.nombre}
      Vida: ${this.hp} 
      Ataque base: ${this.ataque} 
      Vivo: ${this.estaVivo()}`
    );
    }

    estaVivo(): boolean{
        return this.hp > 0;
    }
}


