export abstract class Curso {
    constructor(
        public nombre: string,
        public instructor: string,
        public precio: number
    ) {}

    abstract calcularPrecioFinal(): number;
    abstract generarCertificado(): void;
    abstract mostrarBeneficios(): void;

    mostrarInformacion(): void {
        console.log("Curso: " + this.nombre);
        console.log("Instructor: " + this.instructor);
        console.log("Precio base: Q" + this.precio);
    }
}
