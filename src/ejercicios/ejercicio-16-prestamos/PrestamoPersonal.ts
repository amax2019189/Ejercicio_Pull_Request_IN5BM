import { Prestamo } from "./Prestamo";

export class PrestamoPersonal extends Prestamo {
    private tasaAnual: number = 0.12;

    calcularCuotaMensual(): number {
        return (this.monto + this.calcularInteresTotal()) / this.plazoMeses;
    }

    calcularInteresTotal(): number {
        return this.monto * (this.tasaAnual / 12) * this.plazoMeses;
    }
}