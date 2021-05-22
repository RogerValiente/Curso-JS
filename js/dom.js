//Funcion encargada de mostrar los elementos
window.onload = function () {
  //Obtener los datos de localStorage
  let productos = window.localStorage.getItem("productos");
  //Pasamos la data a un objeto
  productos = window.JSON.parse(productos);
  //Selecionamos el elemento del HTML
  let listaPostre = document.getElementById("postre");
  let listaPasteleria = document.getElementById("pastelerias");

  var card = "";
  var card2 = "";
  var card3 = "";

  //Seccion Postres
  if (listaPostre) {
    productos.dataPostres.forEach((data) => {
      card += crearCard(data);
    });
    document.getElementById("postre").innerHTML = card;
  }
  //Seccion Pasteleria
  if (listaPasteleria) {
    productos.dataPasteleria.forEach((data) => {
      card2 += crearCard(data);
    });
    document.getElementById("pastelerias").innerHTML = card2;
  }
  //Seccion Detalles
  if (document.getElementById("detallesList")) {
    productos.dataDetalles.forEach((data) => {
      card3 += crearCard(data);
    });
    document.querySelector("#detallesList").innerHTML = card3;
  }
};

//Funcion para crear las cards para todos los productos
function crearCard(datos) {
  return `
    <div class="card" style="width: 18rem; margin-bottom: 1rem;">
    <div class="card-body">
    <a href="#"><img src=${datos.img} alt="Merengue o suspiro"></a>
    <h3 class="card-title">${datos.titulo}</h3>
    <p class="card-text">${datos.descripcion}</p>
    <h4 class="card-text font-weight-bold">Precio $ ${datos.precio}</h4>
    <h4 class="card-text font-weight-bold">ID ${datos.id}</h4>
    <button class="btn btn-primary" onclick='agregarProductoCarrito({nombre:"${datos.titulo}"})'>Agregar al
    carrito</button>
    </div>
    </div>`;
}
