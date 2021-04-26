class Producto {
  constructor() {
    this.listaProductos = [
      {
        title: "Bmw x6",
        price: "150000",
        thumbnail:
          "https://soymotor.com/sites/default/files/imagenes/noticia/bmw_x6_m_2020_1.jpg",
        id: 1,
      },
      {
        title: "Bmw Serie 1",
        price: "50000",
        thumbnail:
          "https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/46483/bmw-1-series-2020-port.jpg",
        id: 2,
      },
      {
        title: "Bmw Serie 5",
        price: "60000",
        thumbnail: "https://i.blogs.es/d6b999/bmw-serie-5-2021-4-/450_1000.jpg",
        id: 3,
      },
    ];
    this.nextIdProductos = 3;
  }

  get() {
    return this.listaProductos.length
      ? [...this.listaProductos]
      : { error: "no hay productos cargados" };
  }

  getByID(id) {
    const reqProducto = this.listaProductos.find(
      (producto) => producto.id == id
    );
    return reqProducto || { error: "producto no encontrado" };
  }

  add(data) {
    const nuevoProducto = { ...data, id: ++this.nextIdProductos };
    this.listaProductos.push(nuevoProducto);
    return nuevoProducto;
  }

  update(data, id) {
    this.listaProductos = this.listaProductos.map((producto) => {
      if (producto.id == id) {
        producto.title = data.title;
        producto.price = data.price;
        producto.thumbnail = data.thumbnail;
      }
      return producto;
    });
    return data;
  }

  delete(id) {
    const deletedProducto = this.listaProductos.filter(
      (producto) => producto.id == id
    );
    this.listaProductos = this.listaProductos.filter(
      (producto) => producto.id !== Number(id)
    );
    return deletedProducto;
  }
}

const productos = new Producto();
export { productos };
