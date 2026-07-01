import {ServicioTecnico} from "./ServicioTecnico";

export class MantenimientoImpresora extends ServicioTecnico {
    constructor(problema:string, costoServicio:number, costoComponentes:number, comentario:string) {
        super(problema, costoServicio, costoComponentes, comentario);
    }

    calcularCosto(): number {
        return this.costoServicio + this.costoComponentes;
    }

    diagnosticar(): void {
        
    }

    generarReporte(): void {
        
    }

    mostrarInformacion(): void {
        
    }
}