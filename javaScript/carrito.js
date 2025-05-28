const productor = document.getElementById("productor")
const producto = {
    nombre: "celular",
    categoria: "celular",
    cantidad: 5,
    precio: 290000,
    descripcion: "celular estandar",
    id: 1,
    img: "https://res.cloudinary.com/djaaurvxj/image/upload/v1748214996/WhatsApp_Image_2025-05-24_at_19.31.01_wnlmby.jpg"
  }
  function creadorProducto(producto) {
    // console.log(producto.img)

  const creadorElementos = document.createElement("div");
//   creadorElementos.innerHTML = `<div class="caja-cart">
//         <img class="img-cart" src="${producto.img}" alt="">
//         <p class="text-cart">${producto.descripcion}<br>
//           $ ${producto.precio.toLocaleString()}</p>
//         <button class="btn-cart">borrar</button>
//       </div>`;
//   creadorElementos

  return creadorElementos;
}
creadorProducto()