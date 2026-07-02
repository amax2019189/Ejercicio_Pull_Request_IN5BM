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

// Ejercicio 05
import { Notificacion } from "./ejercicios/ejercicio-05-notificaciones/Notificacion";
import { Email } from "./ejercicios/ejercicio-05-notificaciones/Email";
import { SMS } from "./ejercicios/ejercicio-05-notificaciones/SMS";
import { WhatsApp } from "./ejercicios/ejercicio-05-notificaciones/WhatsApp";

const notificaciones: Notificacion[] = [
  new Email("juan@gmail.com", "Sistema", new Date()),
  new SMS("5512345678", "Banco", new Date()),
  new WhatsApp("+50255551234", "Soporte", new Date()),
];

console.log("\nEJERCICIO 05-SISTEMA DE NOTIFICACIONEs");

notificaciones.forEach((notificacion) => {
  notificacion.mostrarInformacion();
  notificacion.enviar("Su operación fue realizada correctamente.");
  console.log("-----------------------------------------");
});