import { Prestamo } from "./Prestamo";

export class PrestamoHipotecario extends Prestamo {
    private tasaAnual: number = 0.05;

    calcularCuotaMensual(): number {
        return (this.monto + this.calcularInteresTotal()) / this.plazoMeses;
    }

    calcularInteresTotal(): number {
        return this.monto * (this.tasaAnual / 12) * this.plazoMeses;
    }

    override validarMonto(): boolean {
        return this.monto >= 50000;
    }
}   