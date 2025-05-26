const checkboxes = document.querySelectorAll(".check");
const contador = document.getElementById("contador");
const productor = document.getElementById("productor");

let cartItemCount = 0;

const productosElement = [];

const filtersContainer = document.getElementById("filtersContainer");
filtersContainer.addEventListener("change", filterProducts);

let productosData = [];

fetch("/database.json")
  .then((res) => res.json())
  .then((res) => {
    productosData = res;
    res.forEach((producto) => {
      const creadorElementos = creadorProducto(producto);
      productosElement.push(creadorElementos);
      productor.appendChild(creadorElementos);
    });
  })
  .catch((error) => console.error("No se encontro base de datos", error))
  .finally(() => {
    console.log("Promesa finalizada, espero q exitosamente.");
  });

function creadorProducto(producto) {
  const creadorElementos = document.createElement("div");
  creadorElementos.innerHTML = `<div class="caja-prod">
  <img class="img-prod" src="${producto.img}" alt="">
  <button class="btn-prod">agregar al carrito</button>
  <p class="text-prod">${producto.descripcion}<br>
  $ ${producto.precio.toLocaleString()}</p>
  </div>
  `;
  creadorElementos
    .querySelector(".btn-prod")
    .addEventListener("click", updateCart);
  return creadorElementos;
}
function updateCart(e) {
  const statusEl = e.target;
  //-----------------------------------------------------------------------------carrito
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
//-----------------------------------------------------------------------------
function filterProducts() {
  const checkedCategories = Array.from(checkboxes)
    .filter((check) => check.checked)
    .map((check) => check.id);
  productosElement.forEach((productosElement, index) => {
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
