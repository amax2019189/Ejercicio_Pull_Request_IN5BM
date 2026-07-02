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
   ======================================
    Ejercicio 13 - Sistema de Biblioteca
    Kevin Morales - 2025027
   ======================================
*/

import { Libro } from "./ejercicios/ejercicio-13-biblioteca/Libro";
import { Revista } from "./ejercicios/ejercicio-13-biblioteca/Revista";
import { DVD } from "./ejercicios/ejercicio-13-biblioteca/DVD";

const libro = new Libro(1, "Viaje Destructivo", "Aventura");

libro.prestar();
libro.devolver(new Date("2026-08-27T12:00:00Z"));
libro.mostrarInformacion();

const revista = new Revista(
    2, "Detective Comics", "Suspenso", 
    false, new Date("2026-06-12T12:00:00Z")
);

revista.prestar(); // Error
revista.devolver();
revista.mostrarInformacion();

const dvd = new DVD(
    3, "Madagascar", "Comedia", 
    true, new Date("2026-06-05T12:00:00Z"),
    new Date("2026-07-01T12:00:00Z")
);

dvd.devolver(); // Error
dvd.mostrarInformacion();
console.log("Multa DVD: Q." + dvd.calcularMulta().toFixed(2));