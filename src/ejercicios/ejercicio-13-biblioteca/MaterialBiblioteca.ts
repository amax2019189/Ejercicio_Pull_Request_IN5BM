export class MaterialBiblioteca {
    protected id: number;
    protected nombreMaterial: string;
    protected genero: string;
    protected fechaPrestamo: Date;
    protected fechaDevolucion: Date;
    protected disponible: boolean;

    constructor(
        id: number,
        nombreMaterial: string,
        genero: string,
        fechaPrestamo: Date,
        fechaDevolucion: Date,
        disponible: boolean
    ) {
        this.id = id;
        this.nombreMaterial = nombreMaterial;
        this.genero = genero;
        this.fechaPrestamo = fechaPrestamo;
        this.fechaDevolucion = fechaDevolucion;
        this.disponible = disponible;
    }

    estaDisponible = (): boolean => {
        return this.disponible;
    }

    prestar = (): void => {
        if (!this.estaDisponible()) {
            return;
        }
    }
}