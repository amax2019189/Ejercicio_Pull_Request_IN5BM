/*
    | Ejercicio: 01 nomina |

    autor: Marcos Eriberto Santos Ramirez
*/
/*
    | Ejercicios de Clase |

    1. Sistema de nómina empresarial
    2. Sistema de pagos con validaciones
    3. Gestión de vehiculos en venta
    4. Inventario con productos especializados
    5. Sistema de notificaciones multicanal
    6. Plataforma de cursos online
    7. Sistema bancario
    8. Videojuego RPG
    9. Sistema de reportes empresariales
    10. Sistema de tickets para visitas empresariales
    11. Sistema de reservas de hoteles
    12. Sistema de envíos de paquetes
    13. Sistema de biblioteca
    14. Sistema de parqueo
    15. Sistema de ventas de boletos
    16. Sistema de préstamos bancarios
    17. Sistema de restaurantes
    18. Sistema de seguros
    19. Sistema de transporte público
    20. Sistema de mantenimiento técnico
    21. Sistema de facturación
    22. Sistema de clínicas médicas
    23. Sistema de gimnasio
    24. Sistema de delivery
    25. Sistema de inscripción estudiantil
*/

import { Empleado } from "./ejercicios/ejercicio-01-nomina/Empleado";
import { EmpleadoFijo } from "./ejercicios/ejercicio-01-nomina/EmpleadoFijo";
import { EmpleadoHora } from "./ejercicios/ejercicio-01-nomina/EmpleadoHora";
import { EmpleadoComision } from "./ejercicios/ejercicio-01-nomina/EmpleadoComision";

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
