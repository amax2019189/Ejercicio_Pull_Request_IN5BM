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

import { CuentaBancaria } from "./ejercicios/ejercicio-07-banco/cuentaBancaria";
import { CuentaAhorro } from "./ejercicios/ejercicio-07-banco/cuentaAhorro";
import { CuentaCorriente } from "./ejercicios/ejercicio-07-banco/cuentaCorriente";
import { CuentaEmpresarial } from "./ejercicios/ejercicio-07-banco/cuentaEmpresarial";

const cuentas: CuentaBancaria[] = [
    new CuentaAhorro("Juan", 1001, 5000),
    new CuentaCorriente("María", 1002, 3000),
    new CuentaEmpresarial("Empresa ABC", 1003, 10000)
];

cuentas.forEach(cuenta => {
    cuenta.depositar(500);
    cuenta.retirar(200);

    cuenta.mostrarInformacion();

    console.log(`Interés generado: Q${cuenta.calcularInteres()}`);
    console.log("--------------------------------");
});