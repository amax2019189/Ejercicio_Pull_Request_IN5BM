import { Curso } from "./Curso";

export class CursoEmpresarial extends Curso {

    calcularPrecioFinal(): number {
        return this.precio + 200;
    }

    generarCertificado(): void {
        console.log("Certificado para todos los participantes.");
    }

    mostrarBeneficios(): void {
        console.log("Beneficios:");
        console.log("- Certificado");
        console.log("- Soporte");
        console.log("- Capacitación para empresas");
    }
}