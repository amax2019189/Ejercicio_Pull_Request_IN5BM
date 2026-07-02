export abstract class Membresia{
    protected nombreUsuario: string;
    protected precioEstandar: number;
    protected beneficios: string;
    protected estado: boolean;

    constructor(nombreUsuario: string, precioEstandar: number, beneficios: string, estado: boolean) {
        this.nombreUsuario = nombreUsuario;
        this.precioEstandar = precioEstandar;
        this.beneficios = beneficios;
        this.estado = estado;
    } 

    abstract calcularPagoMensual(): number;
    abstract mostrarBeneficios(): void;
    abstract aplicarDescuento(porcentaje?: number): number;

public mostrarInformacion(): void {
    console.log(`Usuario: ${this.nombreUsuario}`);
    console.log(`Precio Mensual: Q${this.calcularPagoMensual()}`);
    console.log(`Precio con Descuento Especial: Q${this.aplicarDescuento()}`);
    console.log(`Estado: ${this.estado ? "Activa" : "Inactiva"}`);
}
}