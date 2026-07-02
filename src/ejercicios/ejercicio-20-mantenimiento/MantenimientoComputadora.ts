import {ServicioTecnico} from "./ServicioTecnico";

export class MantenimientoComputadora extends ServicioTecnico {
    private readonly costoFijoComputadora:number = 375;
    constructor(nombreCliente:string, apellidoCliente:string, marcaEquipo:string, problema:string, costoServicio:number, costoComponentes:number, diagnostico:string) {
        super(nombreCliente, apellidoCliente, marcaEquipo, problema, costoServicio, costoComponentes, diagnostico);
    }

    calcularCosto(costoComponentes:number): number {
        return this.costoFijoComputadora + costoComponentes;
    }

    diagnosticar(problema: string, diagnostico: string): void {
        console.log(`Identificación del problema: ${problema}`);
        console.log(`Diagnóstico: ${diagnostico}`);
    }

    generarReporte(): void {
        console.log("\n===Reporte del mantenimiento de Computadora ===");
        console.log("El equipo " + this.marcaEquipo);
        console.log(`Fue ingresado por el cliente: ${this.nombreCliente} ${this.apellidoCliente}`);
        console.log(`Con el siguiente problema: ${this.problema}`);
        console.log(`El costo total del mantenimiento fue: ` + this.calcularCosto(this.costoComponentes));
        console.log(`Se le proporcionó el siguiente diagnóstico: ${this.diagnostico}`);
    }

        mostrarInformacion(): void {
        console.log("\n===Información del mantenimiento de computadora: ===");
        console.log(`Problema: ${this.problema}`);
        console.log(`Equipo: ${this.marcaEquipo}`);
        console.log(`Cliente: ${this.nombreCliente} ${this.apellidoCliente}`);
    }
}