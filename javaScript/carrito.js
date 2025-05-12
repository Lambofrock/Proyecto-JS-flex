//--------------------------------------------funciones de orden superior---------------------------------------//

const arrayDeCosas = [
  {
    fruta: "manzana",
    cantidad: 5,
    precio: 500,
  },
  {
    fruta: "pera",
    cantidad: 10,
    precio: 450,
  },
  {
    fruta: "sandia",
    cantidad: 3,
    precio: 1500,
  },
  {
    fruta: "naranja",
    cantidad: 12,
    precio: 1000,
  },
  {
    fruta: "melon",
    cantidad: 20,
    precio: 200,
  },
];

const tarea = document.getElementById("tarea");
tarea.addEventListener("click", () => {
  
  const buscarfruta = arrayDeCosas.find(
    function(wea){
      return  wea.fruta === "melon"
    },
  )
  console.log(`el valor del melon con iva es: ${buscarfruta.precio*1.2}`)
  
  // console.log(`valor de los productos sin iva ${buscarfruta}`)
  const insertarIVA = arrayDeCosas.map(
    function(iva){
      return iva.precio*0.2 + iva.precio
    },
  )
  console.log(insertarIVA)
console.log(`precios actualizados con iva ${buscarfruta} ${insertarIVA}`)


});

// const buscarFruta = arrayDeCosas.map()

// Con el array de productos creado vamos realizar ciertas funcionalidades con el objetivos de filtrar, buscar, actualizar precios de productos entre otras que con tus necesidades puedas llegar a desarrollar.

// Utiliza el método find de array para buscar si se encuentra un producto en nuestro array.

// Filtrar los productos siguiendo un criterio por ejemplo que el nombre de un producto contenga una palabra o parte de ella. También puede filtrar por precio, cantidad, etc.

// Utilice el método map para actualizar el precio en un 21% agregando el IVA u otro valor de aumento que desee aplicar sobre cada uno de los productos obteniendo un nuevo array de productos actualizado.