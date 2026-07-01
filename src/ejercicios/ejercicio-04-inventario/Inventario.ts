import { Producto } from "./Producto";

/**
 * Clase Inventario
 * Gestiona la colección completa de productos del sistema
 */
export class Inventario {
  private productos: Map<string, Producto>;

  constructor() {
    this.productos = new Map();
  }

  /**
   * Añade un producto al inventario
   */
  agregarProducto(producto: Producto): void {
    if (this.productos.has(producto.getId())) {
      console.warn(
        `El producto con ID ${producto.getId()} ya existe en el inventario.`
      );
      return;
    }
    this.productos.set(producto.getId(), producto);
    console.log(`Producto ${producto.getNombre()} agregado al inventario.`);
  }

  /**
   * Elimina un producto del inventario
   */
  eliminarProducto(id: string): void {
    if (this.productos.delete(id)) {
      console.log(`Producto con ID ${id} eliminado del inventario.`);
    } else {
      console.warn(`No se encontró producto con ID ${id}.`);
    }
  }

  /**
   * Obtiene un producto por ID
   */
  obtenerProducto(id: string): Producto | undefined {
    return this.productos.get(id);
  }

  /**
   * Actualiza el stock de un producto
   */
  actualizarStock(id: string, cantidad: number): void {
    const producto = this.productos.get(id);
    if (producto) {
      producto.actualizarStock(cantidad);
      console.log(`Stock actualizado para ${producto.getNombre()}`);
    } else {
      console.warn(`No se encontró producto con ID ${id}.`);
    }
  }

  /**
   * Calcula el valor total del inventario
   */
  calcularValorTotal(): number {
    let total = 0;
    this.productos.forEach((producto) => {
      total +=
        producto.calcularPrecioFinal() * producto.getStock();
    });
    return total;
  }

  /**
   * Obtiene la cantidad total de productos en el inventario
   */
  obtenerCantidadTotal(): number {
    let total = 0;
    this.productos.forEach((producto) => {
      total += producto.getStock();
    });
    return total;
  }

  /**
   * Muestra toda la información del inventario
   */
  mostrarInventarioCompleto(): void {
    console.log("\nInventario completo de productos:\n");

    if (this.productos.size === 0) {
      console.log("El inventario está vacío.");
      return;
    }

    this.productos.forEach((producto) => {
      producto.mostrarInformacion();
      console.log("---");
    });

    console.log("\nResumen del inventario:");
    console.log(`Total de productos: ${this.productos.size}`);
    console.log(`Total de unidades: ${this.obtenerCantidadTotal()}`);
    console.log(`Valor total: Q${this.calcularValorTotal().toFixed(2)}`);
  }

  /**
   * Obtiene todos los productos
   */
  obtenerTodos(): Producto[] {
    return Array.from(this.productos.values());
  }
}
