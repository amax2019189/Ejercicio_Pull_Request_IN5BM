import { Membresia } from "../model/Membresia";

export class MembresiaFamiliar extends Membresia {
   private miembros: number;
   
    constructor(nombreUsuario: string, precioEstandar: number, estado: boolean, miembros: number) {
        super(nombreUsuario, precioEstandar,"Acceso a las Instalaciones", estado);
        this.miembros = miembros;
        this.beneficios = `Acceso a las instalaciones para ${this.miembros} + Acceso a canchas deportivas por 2 horas, del plan familiar para: ${this.nombreUsuario}`;
    }

    calcularPagoMensual(): number {
     if(this.estado){
        return this.precioEstandar * 2.2;
     }  
     return 0;
    }

    mostrarBeneficios(): void {
      console.log(`Acceso a los servicios familiares: ${this.beneficios}`);
    }

    aplicarDescuento(porcentaje: number = 5): number {
       if(this.estado){
        let precioFamiliar = this.calcularPagoMensual();
        let descuento = precioFamiliar * (porcentaje / 100);
        if(this.miembros > 4){
            return precioFamiliar - descuento;
        }
    }
     return 0;
}
}