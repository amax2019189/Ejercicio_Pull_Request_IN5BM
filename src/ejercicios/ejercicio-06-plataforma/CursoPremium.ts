import { Curso } from "./Curso";

export class CursoPremium extends Curso {

    calcularPrecioFinal(): number {
        return this.precio;
    }

    generarCertificado(): void {
        console.log("Certificado disponible.");
    }

    mostrarBeneficios(): void {
        console.log("Beneficios:");
        console.log("- Certificado");
        console.log("- Acceso ilimitado");
    }
}