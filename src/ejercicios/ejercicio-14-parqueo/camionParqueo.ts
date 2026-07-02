import { vehichuloParqueo } from "./vehiculoParqueo";

export class camionParqueo extends vehichuloParqueo {

    calcularPago(): number {
        return this.horas * 20;
    }

    mostrarInformacion(): void {
        console.log("Placa: " + this.placa);
        console.log("Porpietario: " + this.propietario);
        console.log("Horas: " + this.horas);
        console.log("Tipo: Camión");
    }
}