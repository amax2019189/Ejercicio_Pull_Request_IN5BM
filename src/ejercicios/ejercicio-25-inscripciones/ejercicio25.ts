/*
25 esteban  2023297
 
*/

export abstract class Inscripcion {

    constructor(
        public nombreEstudiante: string,
        public carnet: string,
        public costoBase: number
    ) {}

     abstract calcularPago(): number;
     abstract aplicarDescuento(): number;
       

     mostrarInfomacion(): void {
     console.log(`Estudiante: ${this.nombreEstudiante}`);
     console.log(`Carnet: ${this.carnet}`);
     console.log(`Costo Base: ${this.costoBase}`);
     console.log(`descuento Aplicado: ${this.aplicarDescuento()}`);
     console.log(`Total a pagar: $${this.calcularPago()}`);

    }
   validarDocumento(): boolean {
    return true;
   }
}

export class inscripcionNuevoIngreso extends Inscripcion {
   calcularPago(): number {
    return this.costoBase + this.cargoMatricula;
}
    constructor(
        nombreEstudiante: string,
        carnet: string,
        costoBase: number,
        public cargoMatricula: number){

            super(nombreEstudiante, carnet, costoBase);
        }
     aplicarDescuento(): number{
      return 0;
     }
     calcularpago(): number{
        return this.costoBase + this.cargoMatricula;
     }
  }

  export class inscripcionReingreso extends Inscripcion {
    
       constructor(
        nombreEstudiante: string,
        carnet: string,
        costoBase: number,
        public esAlumnoRegular: boolean ){
         super(nombreEstudiante, carnet, costoBase);
        }
        aplicarDescuento(): number {
            return this.esAlumnoRegular ? this.costoBase * 0.1 : 0;
        }
        calcularPago(): number {
            return this.costoBase - this.aplicarDescuento();
        }
  }

  export class inscripcionBecado extends Inscripcion {
        constructor(
            nombreEstudiante: string,
            carnet: string,
            costoBase: number,
            public porcentajeBeca: number){
            super( nombreEstudiante, carnet, costoBase);
            }
            aplicarDescuento(): number {
                return this.costoBase * (this.porcentajeBeca / 100);
            }
            calcularPago(): number{
                return this.costoBase - this.aplicarDescuento();
            }
  }

  const inscripciones: Inscripcion[] = [
   new inscripcionNuevoIngreso("juan peres", "202", 1000, 200),
   new inscripcionReingreso("ana Gómez", "172", 1500, true),
   new inscripcionBecado("maría López", "182", 2000, 30)
 ];

  console.log( "Inscripciones Estudiantiles" );
  inscripciones.forEach((inscripcion) => {
   if (inscripcion.validarDocumento()) {
    inscripcion.mostrarInfomacion();
   }
  });