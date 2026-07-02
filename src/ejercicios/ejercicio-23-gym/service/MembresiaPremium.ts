import {Membresia} from "../model/Membresia";

export class MembresiaPremium extends Membresia{
constructor(nombreUsuario: string, precioEstandar: number, estado: boolean) {
        super(nombreUsuario, precioEstandar,"Acceso a las Instalaciones", estado);
        this.beneficios = `Acceso a las instalaciones + Instructor personal + Spa en saunas, del plan premium para: ${this.nombreUsuario}`;
    }

    calcularPagoMensual(): number {
     if(this.estado){
        return this.precioEstandar * 3.5;
     }  
     return 0;
    }

    mostrarBeneficios(): void {
      console.log(`Acceso a los servicios premium: ${this.beneficios}`);
    }

    aplicarDescuento(porcentaje: number = 9): number {
        if(this.estado){
            let precioPremium = this.calcularPagoMensual();
            let descuento = precioPremium * (porcentaje / 100);
            return precioPremium - descuento;
        }
        return 0;
    }
}
    