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
    21. Sistema de generación de facturas
    22. Sistema de clínicas médicas
    23. Sistema de gimnasio
    24. Sistema de delivery
    25. Sistema de inscripción estudiantil
*/

/*
Ejercicio 16-AndreYoj-2022242
*/

import { Prestamo } from "./ejercicios/ejercicio-16-prestamos/Prestamo";
import { PrestamoPersonal } from "./ejercicios/ejercicio-16-prestamos/PrestamoPersonal";
import { PrestamoVehiculo } from "./ejercicios/ejercicio-16-prestamos/PrestamoVehiculo";
import { PrestamoHipotecario } from "./ejercicios/ejercicio-16-prestamos/PrestamoHipotecario";

const listaPrestamos: Prestamo[] = [
    new PrestamoPersonal("Carlos Garcia", 10000, 12),
    new PrestamoVehiculo("Ana Lopez", 45000, 36),
    new PrestamoHipotecario("Luis Martinez", 150000, 60)
];

console.log("=== SISTEMA DE PRESTAMOS BANCARIOS ===");

listaPrestamos.forEach(prestamo => {
    prestamo.mostrarInformacion();
});