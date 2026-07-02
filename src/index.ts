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

/* 
Ejercicio No. 14: Sistema de Parqueo
Humberto Alessandro Pérez González
*/

import { vehichuloParqueo } from "./ejercicios/ejercicio-14-parqueo/vehiculoParqueo";
import { carroParqueo } from "./ejercicios/ejercicio-14-parqueo/carroParqueo";
import { motoParqueo } from "./ejercicios/ejercicio-14-parqueo/motoParqueo";
import { camionParqueo } from "./ejercicios/ejercicio-14-parqueo/camionParqueo";

const vehiculos: vehichuloParqueo[] = [
    new carroParqueo("P123ABC", "Aless", 5),
    new motoParqueo("M578DEF", "Lucia", 3),
    new camionParqueo("C789GHI", "Carlos", 6)
];

vehiculos.forEach(vehiculo => {
    console.log("----------------------------")
    vehiculo.registrarEntrada();
    vehiculo.mostrarInformacion();
    console.log(`Total a Pagar: Q${vehiculo.calcularPago()}`);
    vehiculo.registrarSalida();
});