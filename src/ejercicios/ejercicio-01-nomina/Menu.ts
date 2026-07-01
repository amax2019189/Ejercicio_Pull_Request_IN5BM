
import { Empleado } from "./Empleado";
import { EmpleadoFijo } from "./EmpleadoFijo";
import { EmpleadoHora } from "./EmpleadoHora";
import { EmpleadoComision } from "./EmpleadoComision";

    export function ejecutar(): void {
        const empleados: Empleado[] = [
            new EmpleadoFijo(),
            new EmpleadoHora(),
            new EmpleadoComision()
        ];

        let totalPlanilla = 0;

        console.log("========== PLANILLA DE EMPLEADOS ==========\n");

        empleados.forEach((empleado, index) => {
            console.log("Empleado " + (index + 1) + ":");
            console.log("--------------------------------");

            empleado.mostrarInformacion();

            const pago = empleado.calcularPago();
            totalPlanilla += pago;

            console.log("Pago final: Q" + pago);
            console.log("--------------------------------\n");
        });

        console.log("===========================================");
        console.log("Total de la planilla: Q" + totalPlanilla);
        console.log("===========================================");
    }