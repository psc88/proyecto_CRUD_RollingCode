## guia de conceptos

- onblur = evento para poner un foco al elemento y si lo pierde lo ejecuta.
- this = en nuestro caso lo usamos para traer todo el **INPUT**, si colocamos .values traemos su valor.
- trim() = si viene un usuario y no escribe nada en el input y pierde el foco no valida el campo, quita los espacios vacios de la cadena.
- *clase "is-valid" = valida el campo del input
  *class="valid-feedback/invalid-feedback" = escribimos el texto que vamos a mostrar en los campos valido o invalido
- addEventListener = lo usamos para agregar el evento desde el archivo js y no del html por seguridad
- Se utilizo expresiones regulares (ver en developer Mozilla)
- .test() = se encarga de verificar si cumple o no con la validacion, se pasa por parametro cual es la cadena de texto a evaluar

## Pasos a reproducir

- Creamos el formulario
- Colamos los eventos onblur con su validacion
- 