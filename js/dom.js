// Se hace peticion http para adquirir los datos del JSON
function cargarData() {
  var card = "";
  var card1 = "";
  var card2 = "";
  //Selecionamos el elemento del HTML
  let listaPostre = document.getElementById("postreCard");
  let listaPasteleria = document.getElementById("pasteleriaCard");
  let listaDetalles = document.getElementById("detallesCard");

  fetch("/js/api.json")
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      if (listaPostre) {
        datos.forEach((data, index) => {
          if (index < 9) {
            card += crearCard(data);
          }
        });
        listaPostre.innerHTML = card;
      }

      if (listaPasteleria) {
        datos.forEach((data, index) => {
          if (index > 8 && index < 18) {
            card1 += crearCard(data);
          }
        });
        listaPasteleria.innerHTML = card1;
      }

      if (listaDetalles) {
        datos.forEach((data, index) => {
          if (index > 17 && index < 27) {
            card2 += crearCard(data);
          }
        });
        listaDetalles.innerHTML = card2;
      }
    });
}
cargarData();

//Funcion para crear las cards para todos los productos
function crearCard(datos) {
  /* Destrucuring */
  const { nombre, imagen, descripcion, precio, id, cantidad } = datos;

  return `
  <div class="card" style="width: 18rem; margin-bottom: 1rem;">
  <div class="card-body">
  <a href="#"><img src=${imagen} alt="Merengue o suspiro"></a>
  <h3 class="card-title">${nombre}</h3>
  <p class="card-text">${descripcion}</p>
  <h4 class="card-text font-weight-bold">Precio $ ${precio}</h4>
    <button class="btn btn-primary" onclick='agregarProductoCarrito({imagen:"${imagen}", cantidad:"${cantidad}", id:"${id}", nombre: "${nombre}", precio:"${precio}"})'>Agregar al
    carrito</button>
    </div>
    </div>`;
}
