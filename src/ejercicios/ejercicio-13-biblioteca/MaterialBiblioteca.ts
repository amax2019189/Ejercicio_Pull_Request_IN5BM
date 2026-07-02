export abstract class MaterialBiblioteca {
    protected id: number;
    protected titulo: string;
    protected genero: string;
    protected disponible: boolean;
    protected fechaPrestamo: Date | null;
    protected fechaDevolucion: Date | null;

    constructor(
        id: number,
        titulo: string,
        genero: string,
        disponible?: boolean,
        fechaPrestamo?: Date,
        fechaDevolucion?: Date
    ) {
        this.id = id;
        this.titulo = titulo;
        this.genero = genero;
        this.disponible = disponible ?? true;
        this.fechaPrestamo = fechaPrestamo ?? null;
        this.fechaDevolucion = fechaDevolucion ?? null;
    };

    // Método extra para calcular los días entre el préstamo y la entrega
    protected obtenerDiasPrestado(): number {
        if (!this.fechaPrestamo || !this.fechaDevolucion) {
            return 0;
        }

        const diferenciaMs = this.fechaDevolucion.getTime() - this.fechaPrestamo.getTime();
        const diferenciaDias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
        // Milisegundos -> Segundos -> Minutos -> Horas -> Días

        return diferenciaDias;
    };

    public estaDisponible = () : boolean => {
        return this.disponible;
    };
    
    public abstract calcularMulta() : number;

    public prestar = () : void => {
        if (!this.estaDisponible()) {
            console.log("Error: " + this.titulo + " no está disponible.");
            return;
        }

        this.fechaPrestamo = new Date();
        this.fechaDevolucion = null;
        this.disponible = false;

        console.log(this.titulo + " ha sido prestado el: " + this.fechaPrestamo.toLocaleDateString());
    };

    public devolver = (fechaDevolucion: Date = new Date()) : void => {
        if (this.estaDisponible()) {
            console.log("Error: " + this.titulo + " no fue prestado.");
            return;
        }

        this.fechaDevolucion = fechaDevolucion;
        this.disponible = true;

        console.log(this.titulo + " ha sido devuelto el: " + fechaDevolucion.toLocaleDateString());

        const multa = this.calcularMulta();
        if (multa > 0) {
            console.log("Devolución retrasada. Multa a pagar: Q." + multa.toFixed(2));
        } else {
            console.log("Devolución a tiempo.");
        }
    };

    public mostrarInformacion(): void {
        console.log("==== " + this.id + ".- " + this.titulo + " ====");
        console.log("Género: " + this.genero);
        console.log(`Disponible: ${this.disponible ? "Sí" : "No"}`);
        if (this.fechaPrestamo) {
            console.log("Fecha Préstamo: " + this.fechaPrestamo.toLocaleDateString());
        }
        if (this.fechaDevolucion) {
            console.log("Fecha Devolución: " + this.fechaDevolucion.toLocaleDateString());
        }
    }
}