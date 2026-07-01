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

/** ============================================================================
    EJERCICIO 15: SISTEMA DE VENTAS DE BOLETOS
 
    OBJETIVO: Aplicar los conceptos de Herencia y Polimorfismo.

    EXPLICACIÓN DEL FLUJO:
    1. Creamos un arreglo utilizando como tipo la clase base abstracta 'Boleto'.
    2. Gracias al Polimorfismo, podemos almacenar dentro de este mismo arreglo 
       cualquiera de las tres clases hijas (General, VIP y Estudiante).
    3. Recorremos el arreglo con un método '.forEach' para imprimir los datos. 
       Cada objeto ejecuta de forma automática sus propias operaciones matemáticas 
       de descuentos o cargos sin necesidad de usar condicionales 'if' complejos.

    Trabajado por: José Angel Coy Mucía - 2025161
    ============================================================================ */

import { Boleto } from
    "./ejercicios/ejercicio-15-bolestos/Boleto";
import { BoletoGeneral } from
    "./ejercicios/ejercicio-15-bolestos/BoletoGeneral";
import { BoletoVIP } from
    "./ejercicios/ejercicio-15-bolestos/BoletoVIP";
import { BoletoEstudiante } from
    "./ejercicios/ejercicio-15-bolestos/BoletoEstudiante";

console.log("==================================================");
console.log("        SISTEMA DE VENTAS DE BOLETOS              ");
console.log("==================================================\n");

// Polimorfismo con el arreglo de la clase base Boleto
const listaBoletos: Boleto[] = [

    // --- Ejemplos de Boleto General ---
    new BoletoGeneral(101, "Concierto Rock Fest", 250),
    new BoletoGeneral(102, "Partido de Fútbol Local", 100),
    new BoletoGeneral(103, "Obra de Teatro Clásica", 150),

    // --- Ejemplos de Boleto VIP ---
    new BoletoVIP(201, "Festival Electrónico", 600, 150), // precio base + Q150 de cargo por servicio
    new BoletoVIP(202, "Conferencia de Tecnología", 450, 75),  // precio base + Q75 de cargo por servicio
    new BoletoVIP(203, "Concierto Rock Fest", 500, 120), // precio base + Q120 de cargo por servicio

    // --- Ejemplos de Boleto Estudiante ---
    new BoletoEstudiante(301, "Visita Guiada al Museo", 50, 0.80), // 80% de descuento
    new BoletoEstudiante(302, "Torneo de Ajedrez Escolar", 60, 0.25), // 25% de descuento
    new BoletoEstudiante(303, "Feria de Ciencias", 80, 0.50) // 50% de descuento
];

// Recorrer el arreglo para imprimir los resultados en consola
listaBoletos.forEach(boleto => {
    boleto.mostrarInformacion();
    console.log("--------------------------------------------------");
});