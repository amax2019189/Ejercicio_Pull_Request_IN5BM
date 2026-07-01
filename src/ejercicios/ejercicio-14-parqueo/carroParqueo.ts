import { vehichuloParqueo } from "./vehiculoParqueo";

export class carroParqueo extends vehichuloParqueo {

    calcularPago(): number {
        return this.horas *10;
    }

    mostrarInformacion(): void {
        console.log("Placa: " + this.placa);
        console.log("Propietario: " + this.propietario);
        console.log("Horas: " + this.horas);
        console.log("Tipo: Carro");
    }
}