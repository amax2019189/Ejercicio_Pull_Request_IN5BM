import { Curso } from "./Curso";

export class CursoGratis extends Curso {

    calcularPrecioFinal(): number {
        return 0;
    }

    generarCertificado(): void {
        console.log("No incluye certificado.");
    }

    mostrarBeneficios(): void {
        console.log("Beneficios:");
        console.log("- Acceso al contenido");
    }
}