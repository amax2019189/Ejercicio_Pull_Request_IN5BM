import {Membresia} from "../model/Membresia";

export class MembresiaBasica extends Membresia{
    constructor(nombreUsuario: string, precioEstandar: number, estado: boolean) {
        super(nombreUsuario, precioEstandar,"Acceso a las Instalaciones", estado);
        this.beneficios = `Acceso a las instalaciones del plan básico para: ${this.nombreUsuario}`;
    }

    calcularPagoMensual(): number {
        if(this.estado){
            return this.precioEstandar;
        }
        return 0;
    }

    mostrarBeneficios(): void {
        console.log(`Acceso a los servicios básicos: ${this.beneficios}`);
    }

    aplicarDescuento(porcentaje?: number): number {
        if(this.estado){
            return this.calcularPagoMensual();
        }
        return 0;
    }
}