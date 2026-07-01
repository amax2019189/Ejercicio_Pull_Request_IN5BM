- Instrucciones Generales

1. Crear una rama nueva
    git checkout main
    git pull origin main
    git checkout -b ejercicio-01-nomina

2. Utilizar la carpeta del ejercicio correspodiente.
    Ejemplo: 
        ejercicio-01-prueba

3. Usar una clase base
    Ejemplo:
        export abstract class Empleado {
            constructor(
                public nombre: string,
                public codigo: number
            ) {}

            abstract calcularPago(): number;
        }

4. Crear mínimo 3 clases hijas
    Ejemplo:
        export class EmpleadoFijo extends Empleado {}
        export class EmpleadoPorHora extends Empleado {}
        export class EmpleadoComision extends Empleado {}

5. Sobrescribir métodos
    Ejemplo: 
        calcularPago(): number {
            return 5000;
        }

6. Usar polimorfismo
    Ejemplo:
        const empleados: Empleado[] = [
            new EmpleadoFijo("Carlos", 1),
            new EmpleadoPorHora("Ana", 2),
            new EmpleadoComision("Luis", 3)
        ];

7. Recorrer el arreglo
    Ejemplo:
        empleados.forEach(empleado => {
            console.log(empleado.calcularPago());
        });


- Instrucciones para el PR

1. Crear Pull Request
    Ejemplo:
        ejercicio-01-nomina → main

2. El PR debe incluir descripción
    Ejemplo:
        Se implementó el ejercicio 01 de nómina.

        Incluye:
        - Clase abstracta Empleado.
        - Clases hijas EmpleadoFijo, EmpleadoPorHora y EmpleadoComision.
        - Uso de herencia.
        - Uso de polimorfismo con Empleado[].
        - Cálculo de pagos por tipo de empleado.

- Reglas técnicas obligatorias

1. Usar TypeScript.
2. Usar clases.
3. Usar constructor.
4. Usar herencia con extends.
5. Usar al menos un método abstracto o sobrescrito.
6. Usar polimorfismo con arreglo de clase base.
7. Mostrar resultados en consola.
8. No dejar errores de TypeScript.
9. No subir node_modules.
10. Subir el ejercicio mediante Pull Request.

- Checklist antes de subir el PR

[ ] El proyecto ejecuta con pnpm dev.
[ ] La clase base existe.
[ ] Hay mínimo 3 clases hijas.
[ ] Se usa extends.
[ ] Se usa constructor.
[ ] Se usa polimorfismo.
[ ] Se imprimen resultados en consola.
[ ] No hay errores.
[ ] Se hizo commit.
[ ] Se hizo push.
[ ] Se creó el Pull Request.