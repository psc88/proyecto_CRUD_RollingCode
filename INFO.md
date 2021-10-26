## guia de conceptos

- CRUD = cread read update delete
- onblur = evento para poner un foco al elemento y si lo pierde lo ejecuta.
- this = en nuestro caso lo usamos para traer todo el **INPUT**, si colocamos .values traemos su valor.
- trim() = si viene un usuario y no escribe nada en el input y pierde el foco no valida el campo, quita los espacios vacios de la cadena al comienzo.
- *clase "is-valid" = valida el campo del input
  *class="valid-feedback/invalid-feedback" = escribimos el texto que vamos a mostrar en los campos valido o invalido
- addEventListener = lo usamos para agregar el evento desde el archivo js y no del html por seguridad
- Se utilizo expresiones regulares (ver en developer Mozilla)
- .test() = se encarga de verificar si cumple o no con la validacion, se pasa por parametro cual es la cadena de texto a evaluar
- e.preventDefault(): metodo que nos permite hacer que la pagina no recargue al momento de ejecutar un evento del tipo submit de un boton.
- modulos: utilizamos para que en nuestro admin.html indiquemos un modulo al archivo js y nos permita relacionar con los otros archivos js
- export = exporta una funcion fuera del mismo archivo
- import = importa al mismo archivo el contenido de los archivos por fuera
- JSON (JavaScript Object Notation) = formato que siempre tiene que estar escrito con "" (doble comilla)
- localStorage = utilizamos para guardar datos de manera local en nuestro navegador
- setItem() = metodo para guardar datos
- getItem() = metodo para obtener datos
- JSON.stringify() = transforma lo que sea a formato JSON
- .reset() = solo limpia un value.
- JSON.parse() = tranforma el codigo JSON a un objeto
- .find() = nos permite buscar un elemento que coincide con una condicion logica, y cuando lo encuentra lo almacena dentro de la variable

## Pasos a reproducir

- Creamos el formulario
- Colamos los eventos onblur con sus validacion para cada input
- validamos los datos para el button.
- careamos archivo productoClass para las clases de nuestro proyecto
- creamos archivo admin que contendra la logica de nuestro CRUD.
- migramos las variables y eventos del archivo validaciones.js al admin.js con sus export e import.
- Creamos un objeto Producto.
- utilizamos localStorage para guardar los datos de nuestro array de productos de manera local.
- Creacion de funcion para limpiar el formulario al momento de guardar.
- Creacion de funcion para traer los datos del localstorage y no perder sus datos al reiniciar el navegador.
- Creamos maquetado de tabla para mostrar nuestros productos.
- Creamos funcion crearFilas() dentro del admin.js para crear la logica de Read y poder visualizar los valores guardados en la tabla
- Creamos funcion prepararEdicion() para poder mostrar los datos ya cargados nuevamente en la tabla 
- 