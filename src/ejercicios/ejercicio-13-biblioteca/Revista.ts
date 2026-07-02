import { MaterialBiblioteca } from "./MaterialBiblioteca";

export class Revista extends MaterialBiblioteca {
    private DIAS_MAXIMOS = 7;
    private TARIFA_MULTA = 0.75;

    constructor(
        id: number,
        titulo: string,
        genero: string,
        disponible?: boolean,
        fechaPrestamo?: Date,
        fechaDevolucion?: Date
    ) {
        super(id, titulo, genero, disponible, fechaPrestamo, fechaDevolucion);
    }

    calcularMulta(): number {
        const diasPrestado = this.obtenerDiasPrestado();
        const diasAtraso = diasPrestado - this.DIAS_MAXIMOS;

        return diasAtraso > 0 ? diasAtraso * this.TARIFA_MULTA : 0;
    }
}