const buscador = document.getElementById("buscador");
const mostrar = document.getElementById("mostrar");
const btnResultado = document.getElementById("btnResultado");

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



btnResultado.addEventListener("click", () => {
  const buscarFruta = arrayDeCosas.find(function (frutiwi) {
    return frutiwi.fruta === buscador.value;
  });
  console.log(buscarFruta)
resultado.textContent = `producto con +IVA (20%) =  ${buscarFruta.fruta} ${buscarFruta.precio*1.20}`
});

arrayDeCosas.forEach(elemento =>{
    const li = document.createElement("li");
    li.textContent= `  ${elemento.fruta} : $${elemento.precio}`;
    mostrar.appendChild(li);
})
// let parrafos = document.querySelector('a');
// parrafos.setAttribute('href', 'http://127.0.0.1:5500/main.html');// borrar, solo practica no funcionara en github!!!!

  // let primerItem = lista.firstChild;
  // lista.insertBefore(nuevoItem, primerItem);




//   const productos = [
//   { nombre: "Arroz", precio: 125 },
//   { nombre: "Fideos", precio: 70 },
//   { nombre: "Pan", precio: 50 }
// ];

// const contenedor = document.getElementById('productos');

// contenedor.innerHTML = `
//   <h2>Lista de Productos</h2>
//   <ul>
//     ${productos.map(producto => `<li>${producto.nombre} - $${producto.precio}</li>`).join('')}
//   </ul>
// `;


// <a href="#seccion1">Ir a la Sección 1</a>
// ...
// <h2 id="seccion1">Sección 1</h2>

// function first() {
//     console.log("Primera función");
//     second();
//     console.log("Primera función - Parte 2");
// }

// function second() {
//     console.log("Segunda función");
// }

// first();

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))