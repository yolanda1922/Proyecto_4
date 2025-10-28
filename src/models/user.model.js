
export class User {
  id;
  name;
  direccion;
  pais;
  ciudad;
  telefono;
  email;
  categoria;
  descripcion;
  precio_noche;
  disponibilidad;
  servicios;

  constructor(
    id,
    name,
    direccion,
    pais,
    ciudad,
    telefono,
    email,
    categoria,
    descripcion,
    precio_noche,
    disponibilidad = true,
    servicios = []
  ) {
    if (
      id == null ||
      !name ||
      !direccion ||
      !pais ||
      !ciudad ||
      !telefono ||
      !email ||
      !categoria ||
      !descripcion ||
      precio_noche == null
    ) {
      throw new Error("Todos los campos son obligatorios");
    }
    this.id = id;
    this.name = name;
    this.direccion = direccion;
    this.pais = pais;
    this.ciudad = ciudad;
    this.telefono = telefono;
    this.email = email;
    this.categoria = categoria;
    this.descripcion = descripcion;
    this.precio_noche = precio_noche;
    this.disponibilidad = disponibilidad;
    this.servicios = servicios;
  }

  static createUser(data) {
    return new User(
      data.id,
      data.name,
      data.direccion,
      data.pais,
      data.ciudad,
      data.telefono,
      data.email,
      data.categoria,
      data.descripcion,
      data.precio_noche,
      data.disponibilidad,
      data.servicios
    );
  }

  getId() { return this.id; }
  getName() { return this.name; }
  getDireccion() { return this.direccion; }
  getPais() { return this.pais; }
  getCiudad() { return this.ciudad; }
  getTelefono() { return this.telefono; }
  getEmail() { return this.email; }
  getCategoria() { return this.categoria; }
  getDescripcion() { return this.descripcion; }
  getPrecioNoche() { return this.precio_noche; }
  isDisponibilidad() { return this.disponibilidad; }
  getServicios() { return this.servicios; }

  toJson() {
    return {
      id: this.id,
      name: this.name,
      direccion: this.direccion,
      pais: this.pais,
      ciudad: this.ciudad,
      telefono: this.telefono,
      email: this.email,
      categoria: this.categoria,
      descripcion: this.descripcion,
      precio_noche: this.precio_noche,
      disponibilidad: this.disponibilidad,
      servicios: this.servicios,
    };
  }

  fullObject() {
    return `User [id=${this.id}, name=${this.name}, direccion=${this.direccion}, pais=${this.pais}, ciudad=${this.ciudad}, telefono=${this.telefono}, email=${this.email}, categoria=${this.categoria}, descripcion=${this.descripcion}, precio_noche=${this.precio_noche}, disponibilidad=${this.disponibilidad}, servicios=${this.servicios}]`;
  }

  // setters...
  setName(name) { this.name = name; }
  setDireccion(direccion) { this.direccion = direccion; }
  setPais(pais) { this.pais = pais; }
  setCiudad(ciudad) { this.ciudad = ciudad; }
  setTelefono(telefono) { this.telefono = telefono; }
  setEmail(email) { this.email = email; }
  setCategoria(categoria) { this.categoria = categoria; }
  setDescripcion(descripcion) { this.descripcion = descripcion; }
  setPrecioNoche(precio_noche) { this.precio_noche = precio_noche; }
  setDisponibilidad(disponibilidad) { this.disponibilidad = disponibilidad; }
  setServicios(servicios) { this.servicios = servicios; }
}
