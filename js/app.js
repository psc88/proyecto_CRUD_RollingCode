let listaProducto = [];

cargaInicial();

function cargaInicial(){
    // revisar los datos de local storage
    listaProducto = JSON.parse(localStorage.getItem("arregloProducto")) || [];
    // dibujar las columnas con sus respectivas cards
    if(listaProducto.length > 0){
        listaProducto.forEach(itemProducto => {
            crearColumna(itemProducto);
        });
    }
}

function crearColumna(producto){
    let grilla = document.querySelector("#grilla");
    grilla.innerHTML += `<div class="col-sm-12 col-md-4 col-lg-3 mb-3">
    <div class="card">
        <img src="${producto.url}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.nombre}</p>
        </div>
      </div>
</div>` ;
}