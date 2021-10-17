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

## Pasos a reproducir

- Creamos el formulario
- Colamos los eventos onblur con sus validacion para cada input
- validamos los datos para el button.
- careamos archivo productoClass para las clases de nuestro proyecto
- creamos archivo admin que contendra la logica de nuestro CRUD.
- migramos las variables y eventos del archivo validaciones.js al admin.js con sus export e import.
- Creamos un objeto Producto.
- 