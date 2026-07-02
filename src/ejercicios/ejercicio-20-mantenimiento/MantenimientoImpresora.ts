import {ServicioTecnico} from "./ServicioTecnico";

export class MantenimientoImpresora extends ServicioTecnico {
    private readonly costoFijoImpresora:number = 350;
    constructor(nombreCliente:string, apellidoCliente:string, marcaEquipo:string, problema:string, costoServicio:number, costoComponentes:number, diagnostico:string) {
        super(nombreCliente, apellidoCliente, marcaEquipo, problema, costoServicio, costoComponentes, diagnostico);
    }

    calcularCosto(costoComponentes:number): number {
        return this.costoFijoImpresora + costoComponentes;
    }

    diagnosticar(problema: string, diagnostico: string): void {
        console.log(`Identificación del problema: ${problema}`);
        console.log(`Diagnóstico: ${diagnostico}`);
    }

     generarReporte(): void {
        console.log("\n===Reporte del mantenimiento de Impresora ===");
        console.log("El equipo " + this.marcaEquipo);
        console.log(`Fue ingresado por el cliente: ${this.nombreCliente} ${this.apellidoCliente}`);
        console.log(`Con el siguiente problema: ${this.problema}`);
        console.log(`El costo total del mantenimiento fue: ` + this.calcularCosto(this.costoComponentes));
        console.log(`Se le proporcionó el siguiente diagnóstico: ${this.diagnostico}`);
    }

    mostrarInformacion(): void {
        console.log("\n=== Información del mantenimiento de Impresora ===");
        console.log(`Problema: ${this.problema}`);
        console.log(`Equipo: ${this.marcaEquipo}`);
        console.log(`Cliente: ${this.nombreCliente} ${this.apellidoCliente}`);
    }
}