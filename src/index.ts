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

// Ejercicio 20: - Sistema de mantenimiento técnico -
// Autor: Kenneth Xavier Caneda Trujillo - 2025086
// Objetivo: Aplicar las características de la herencia y polimorfismo para aplicar una misma base de una clase padre a diferentes tipos de mantenimiento técnico, como mantenimiento de computadoras, impresoras y redes.
import {MantenimientoComputadora} from "./ejercicios/ejercicio-20-mantenimiento/MantenimientoComputadora";
import {MantenimientoImpresora} from "./ejercicios/ejercicio-20-mantenimiento/MantenimientoImpresora";
import {MantenimientoRed} from "./ejercicios/ejercicio-20-mantenimiento/MantenimientoRed";

const mantenimientoComputadora = new MantenimientoComputadora("Juan", "Pérez", "Dell", "No enciende", 100, 50, "Problema de fuente de poder");
const mantenimientoImpresora = new MantenimientoImpresora("María", "Gómez", "HP", "Atasco de papel", 80, 30, "Problema de rodillos");
const mantenimientoRed = new MantenimientoRed("Carlos", "Ramírez", "Cisco", "No hay conexión a internet", 120, 40, "Problema de configuración");

//Computadora
mantenimientoComputadora.mostrarInformacion();
mantenimientoComputadora.generarReporte();
//Impresora    
mantenimientoImpresora.mostrarInformacion();
mantenimientoImpresora.generarReporte();
//Red
mantenimientoRed.mostrarInformacion();
mantenimientoRed.generarReporte();