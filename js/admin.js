import {
  validarCodigo,
  validarCampoRequerido,
  validarNumeros,
  validarURL,
  validarGeneral,
} from "./validaciones.js";
import { Producto } from "./productoClass.js";

// traer los input/textarea
let codigo = document.querySelector("#codigo");
let cantidad = document.querySelector("#cantidad");
let url = document.querySelector("#url");
let producto = document.querySelector("#producto");
let descripcion = document.querySelector("#descripcion");
let formulario = document.querySelector("#formProducto");
let listaProductos = [];

cargarInicial();

// le agregamos el evento
codigo.addEventListener("blur", () => {
  validarCodigo(codigo);
});
cantidad.addEventListener("blur", () => {
  validarNumeros(cantidad);
});
url.addEventListener("blur", () => {
  validarURL(url);
});
producto.addEventListener("blur", () => {
  validarCampoRequerido(producto);
});
descripcion.addEventListener("blur", () => {
  validarCampoRequerido(descripcion);
});
formulario.addEventListener("submit", guardarProducto);

function guardarProducto(e) {
  e.preventDefault();
  // verificar que pase todas las validaciones
  if (validarGeneral()) {
    //  tengo que crear el producto
    console.log("correcto");
    agregarProducto();
  } else {
    //  no tengo que crear el producto
    console.log("incorrecto");
  }
}

function agregarProducto() {
  // crear un objeto producto
  let productoNuevo = new Producto(
    codigo.value,
    producto.value,
    descripcion.value,
    cantidad.value,
    url.value
  );
  // cargar el producto dentro del arreglo
  listaProductos.push(productoNuevo);
  // al arreglo de productos lo almaceno en localstorage
  localStorage.setItem("arregloProducto", JSON.stringify(listaProductos));
  // limpiar el formulario
  limpiarFormulario();
  // cargar el producto nuevo en la fila de la tabla
  crearFilas(productoNuevo);
  // mostrar un mensaje al usuario
  
}

function limpiarFormulario() {
  // limpiar los value de mis input
  formulario.reset();
  // limpiar los estilos
  codigo.className = "form-control";
  cantidad.className = "form-control";
  url.className = "form-control";
  producto.className = "form-control";
  descripcion.className = "form-control";
}

function cargarInicial() {
  // traer los productos del localstorage si existieran sino dejar el arreglo vacio.
  listaProductos = JSON.parse(localStorage.getItem("arregloProducto")) || [];

  // si hay productos dentro del arreglo entonces los muestro en la tabla
  listaProductos.forEach((itemProducto) => {
    //codigo que ejecuta por cada elemento del arreglo
    crearFilas(itemProducto);
  });
}

function crearFilas(itemProducto) {
  let tabla = document.querySelector("#tablaProducto");
  console.log(itemProducto);
  tabla.innerHTML += `<tr>
    <th scope="row">${itemProducto.codigo}</th>
    <td>${itemProducto.nombre}</td>
    <td>${itemProducto.descripcion}</td>
    <td>${itemProducto.cantidad}</td>
    <td>${itemProducto.url}</td>
    <td>
    <button class="btn btn-warning" onclick="prepararEdicion(${itemProducto.codigo})">Editar</button>
    <button class="btn btn-danger">Borrar</button>
    </td>
  </tr>`;
}

window.prepararEdicion = (codigoProducto) =>{
  console.log(codigoProducto)
  // buscar el objeto
  let productoBuscado = listaProductos.find((itemProducto) => {return itemProducto.codigo ==  codigoProducto})
  console.log(productoBuscado)
  // mostrarlo en el formulario
  codigo.value = productoBuscado.codigo;
  cantidad.value = productoBuscado.cantidad;
  url.value = productoBuscado.url;
  producto.value = productoBuscado.nombre;
  descripcion.value = productoBuscado.descripcion;
}

