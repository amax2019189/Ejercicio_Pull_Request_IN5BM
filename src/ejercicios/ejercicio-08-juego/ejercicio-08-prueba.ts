export abstract class Personaje{
    constructor(
        public nombre: string,
        public hp : number,
        public estado: boolean,
        public poderEspecial: string
    ){}

    
}

export class Guerrero extends Personaje{

}

export class Mago extends Personaje{

}

export class Arquero extends Personaje{

}

