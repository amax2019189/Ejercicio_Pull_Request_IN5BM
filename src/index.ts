/*
25 esteban  2023297
 
*/

export class Inscripcion {

    constructor(
        public nombreEstudiante: string,
        public carnet: string,
        public costoBase: number
    ) {}

     abstract calcularPago(): number;
    abstract aplicarDescuento(): number;
    abstract mostrarInformacion(): void;


    }

}

