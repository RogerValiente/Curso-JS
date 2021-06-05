$("document").ready(function (e) {
  let productos = $(".volver-catalogo");

  productos.click(function (e) {
    e.preventDefault();

    $("html, body").animate({ scrollTop: 200 }, 1000);
  });
  productos.hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 5250) {
      productos.fadeIn();
    } else {
      productos.fadeOut();
    }
  });
});

$("document").ready(function (e) {
  let inicio = $(".volver-arriba");
  inicio.click(function (e) {
    e.preventDefault();

    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
  inicio.hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1200) {
      inicio.fadeIn();
    } else {
      inicio.fadeOut();
    }
  });
});
