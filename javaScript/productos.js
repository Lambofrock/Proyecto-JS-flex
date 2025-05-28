const checkboxes = document.querySelectorAll(".check");
const contador = document.getElementById("contador");
const productor = document.getElementById("productor");
const filtersContainer = document.getElementById("filtersContainer");
filtersContainer.addEventListener("change", filterProducts);
const productosElementos = [];
let productosData = [];
let cartItemCount = 0;


const database = fetch("../data/database.json")
database.then((res) => res.json())
.then((res) => {
  productosData = res;
  res.forEach((producto) => {
      const creadorElementos = creadorProducto(producto);
      productosElementos.push(creadorElementos);
      productor.appendChild(creadorElementos);
    });
  })
  .catch((error) => console.error("No se encontro base de datos", error))
  .finally(() => {
    console.log("Promesa finalizada, espero q exitosamente.");
  });
  
  
  function creadorProducto(producto) {
    const creadorElementos = document.createElement("div");
    console.log(producto.nombre)
    creadorElementos.innerHTML = `<div class="caja-prod">
    <img class="img-prod" src="${producto.img}" alt="">
    <button class="btn-prod">agregar al carrito</button>
    <p class="text-prod">${producto.descripcion}<br>
    $ ${producto.precio.toLocaleString()}</p>
    </div>`;
    creadorElementos
    .querySelector(".btn-prod")
    .addEventListener("click", updateCart);
    return creadorElementos;
  }
  //-----------------------------------------------------------------------------carrito
  function updateCart(e) {
    const statusEl = e.target;
    if (statusEl.classList.contains("añadir")) {
      statusEl.classList.remove("añadir");
      statusEl.innerText = "Agregar al carrito";
      
      cartItemCount--;
    } else {
      statusEl.classList.add("añadir");
      statusEl.innerText = "Quitar del carrito";
      
      cartItemCount++;
    }
    
    cartCount.innerText = cartItemCount.toString();
  }
  function filterProducts() {
    const checkedCategories = Array.from(checkboxes)
    .filter((check) => check.checked)
    .map((check) => check.id);
  productosElementos.forEach((productosElement, index) => {
    const product = productosData[index];
    const isInCheckedCategory =
    checkedCategories.length === 0 ||
    checkedCategories.includes(product.categoria);
    if (isInCheckedCategory) {
      productosElement.classList.remove("ocultar");
    } else {
      productosElement.classList.add("ocultar");
    }
  });
}



// const x = fetch('./database.json');

// x.then((res) => res.json())
//   .then((res) => {
//     console.log(res + "x");
//   })
//   .catch((error) => console.error("No se encontro base de datos", error));
// const c = fetch('../database.json');

// c.then((res) => res.json())
//   .then((res) => {
//     console.log(res+ "c");
//   })
//   .catch((error) => console.error("No se encontro base de datos c", error));
// const z = fetch('../database.json');

// z.then((res) => res.json())
//   .then((res) => {
//     console.log(res+"z");
//   })
//   .catch((error) => console.error("No se encontro base de datos z", error));