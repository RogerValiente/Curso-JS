let data = {
  dataPostres: [
    {
      id: "1",
      titulo: "Cupcakes con Crema",
      descripcion: "De mani & chocolate.",
      img: "img/pos-img/01.jpg",
      precio: 15000,
    },

    {
      id: "2",
      titulo: "Cupcakes Temáticos",
      descripcion: "Especial para cada ocasión.",
      img: "img/pos-img/02.jpg",
      precio: 15000,
    },

    {
      id: "3",
      titulo: "Brownie",
      descripcion: "Galleta & chocolate.",
      img: "img/pos-img/03.jpg",
      precio: 15000,
    },

    {
      id: "4",
      titulo: "Cupcakes & Fondant",
      descripcion: "Especial para cada ocasión.",
      img: "img/pos-img/04.jpg",
      precio: 15000,
    },

    {
      id: "5",
      titulo: "Macarrons",
      descripcion: "Variedades de rellenos.",
      img: "img/pos-img/05.jpg",
      precio: 15000,
    },

    {
      id: "6",
      titulo: "Cupcakes Temáticos",
      descripcion: "Para tus eventos.",
      img: "img/pos-img/06.jpg",
      precio: 15000,
    },

    {
      id: "7",
      titulo: "Cupcakes Decorados",
      descripcion: "Sabor vainilla.",
      img: "img/pos-img/07.jpg",
      precio: 15000,
    },

    {
      id: "8",
      titulo: "Pie",
      descripcion: "Frutos rojos.",
      img: "img/pos-img/08.jpg",
      precio: 15000,
    },
  ],

  dataPasteleria: [
    {
      id: "9",
      titulo: "Torta de la Casa",
      descripcion:
        "Una delicia de la casa con sabor a limón, decoración con frutas y chocolate.",
      img: "img/past-img/01.jpg",
      precio: 15000,
    },
    {
      id: "10",
      titulo: "Torta Deshidratada",
      descripcion:
        "Torta rellena de arequipe, masa sabor vainilla, decoración con peras.",
      img: "img/past-img/02.jpg",
      precio: 25000,
    },
    {
      id: "11",
      titulo: "Tortas Temáticas",
      descripcion:
        "Torta rellena de limón o arequipe y tu eliges la decoración que más te guste.",
      img: "img/past-img/03.jpg",
      precio: 250000,
    },
    {
      id: "12",
      titulo: "Torta Frutos Salvajes",
      descripcion:
        "Torta rellena con frutos rojos, crema de sabores y bizcocho de chocolate.",
      img: "img/past-img/04.jpg",
      precio: 30000,
    },

    {
      id: "13",
      titulo: "Pavlova",
      descripcion: "Delcioso postre elaborado con merengue y frutos rojos.",
      img: "img/past-img/05.jpg",
      precio: 20000,
    },

    {
      id: "14",
      titulo: "Merengue",
      descripcion: "Un delicioso merengue con las frutas que tu elijas.",
      img: "img/past-img/06.jpg",
      precio: 25000,
    },

    {
      id: "15",
      titulo: "Torta Charlotte",
      descripcion: "Torta fría con frutos rojos para deleitar tu paladar.",
      img: "img/past-img/07.jpg",
      precio: 25000,
    },

    {
      id: "16",
      titulo: "Torta Tropical",
      descripcion: "Torta sabor a vainilla, frutos tropicales y chocolate.",
      img: "img/past-img/08.jpg",
      precio: 25000,
    },
  ],

  dataDetalles: [
    {
      id: "17",
      titulo: "Budín",
      descripcion: "Un delicioso budin.",
      img: "img/det-img/01.jpg",
      precio: 15000,
    },

    {
      id: "18",
      titulo: "Galletas Polvorosas",
      descripcion: "Especial para cada ocasión.",
      img: "img/det-img/02.jpg",
      precio: 15000,
    },

    {
      id: "19",
      titulo: "Galletas Temáticas",
      descripcion: "Se adaptan para tus eventos.",
      img: "img/det-img/03.jpg",
      precio: 15000,
    },

    {
      id: "20",
      titulo: "Detalles para Ellos",
      descripcion: "Especial para cada ocasión.",
      img: "img/det-img/04.jpg",
      precio: 15000,
    },

    {
      id: "21",
      titulo: "Torta Temática",
      descripcion: "Para que sorprendas a tu personita especial.",
      img: "img/det-img/05.jpg",
      precio: 15000,
    },

    {
      id: "22",
      titulo: "Detalles Saludables",
      descripcion: "Para que compartas con tu personita especial.",
      img: "img/det-img/06.jpg",
      precio: 15000,
    },

    {
      id: "23",
      titulo: "Detalles para Ellas",
      descripcion: "Especial para cada ocasión y momento especial.",
      img: "img/det-img/07.jpg",
      precio: 15000,
    },

    {
      id: "24",
      titulo: "Cupcakes Temáticos",
      descripcion: "En diferentes modelos para tus eventos.",
      img: "img/det-img/01.jpg",
      precio: 25000,
    },
  ],
};

//Se convierte la data a string
let jsonString = window.JSON.stringify(data);
//Se almacena los datos en localstorage
window.localStorage.setItem("productos", jsonString);
