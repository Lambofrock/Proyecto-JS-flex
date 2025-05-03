// popup
const btnIniciarPop = document.getElementById("iniciar-pop");
const UPop = document.getElementById("User-pop");
const btnChao = document.getElementById("btnChao");
const btnChao2 = document.getElementById("btnChao2");
const btncrearU = document.getElementById("crearU");
const Rpop = document.getElementById("Regis-pop");
const debug = document.getElementById("debug")

debug.addEventListener("click", ()=>{
  UPop.classList.remove("open");
  Rpop.classList.remove("open");
  localStorage.removeItem("usuarioGlobal");
  localStorage.removeItem("lista");
  //para sacar y borrar todo
})

let ListaUsers =  JSON.parse(localStorage.getItem("lista")) ;
console.log(ListaUsers)
const NUsuario = " ";

btnIniciarPop.addEventListener("click", () => {
  UPop.classList.add("open");
  // console.log("abrir pop");
});
btnChao.addEventListener("click", () => {
  UPop.classList.remove("open");
  // console.log("cerrando pop up");
});
btnChao2.addEventListener("click", () => {
  Rpop.classList.remove("open");
  // console.log("cerrando pop up");
});

btncrearU.addEventListener("click", () => {
  // console.log("creando nuevo usuario");
  UPop.classList.remove("open");
  Rpop.classList.add("open");
});

// Usuario

class Usuario {
  constructor(nombre, usuario, contraseña) {
    this.nombre = nombre;
    this.usuario = usuario;
    this.contraseña = contraseña;
  }

  describir() {
    return (hola.innerHTML = `Bienvenido ${this.nombre} !`);
  }
}

const RUsuario = document.getElementById("RUsuario");
const RContraseña = document.getElementById("RContraseña");
const btnRegisU = document.getElementById("registrar");
const NombreUser = document.getElementById("NombreUser");
//   const btnniciar = document.getElementById("iniciar")

btnRegisU.addEventListener("click", () => {
  const usuarioN = new Usuario(
    NombreUser.value,
    RUsuario.value,
    RContraseña.value
  );

  if (usuarioN.usuario === "") {
    alert("debe ingresar nombre de usuario");
  } else if (usuarioN.nombre === "") {
    alert("debe ingresar nombre");
  } else if (usuarioN.contraseña === "") {
    alert("debe ingresar contraseña");
  } else {
    usuarioN.describir();
    ListaUsers.push(usuarioN);
    //se que no debo guardar la contraseña, pero me da lata encriptar para este demo <3

  }
  Rpop.classList.remove("open");
});

//para saber si hay usuario
// const productos = document.getElementById("productos"); ////////boorar boton
const iniciar = document.getElementById("iniciar");
// let listaGuardad = JSON.parse(localStorage.getItem("lista"));
let UsuarioSession = JSON.parse(localStorage.getItem("usuarioGlobal"));



if (UsuarioSession === null) {
  console.log("no hay usuario guardado");
} else {
  console.log(`usuaruio guardado: ${UsuarioSession.nombre}`);
}

//iniciar session

const saludoIndex = () => {
  if (UsuarioSession.nombre === undefined) {
    // console.log("no hay usuario");
  } else hola.innerHTML = `Bienvenido ${UsuarioSession.nombre} !`;
};


if (ListaUsers === null){
  ListaUsers= []
  productos.addEventListener("click", () => {
    ListaUsers.push({ nombre: "seba", usuario: "seba3", contraseña: "1234" });
    localStorage.setItem("lista", JSON.stringify(ListaUsers));
  console.log("lista de usuarios vacia")
  
  });
  
}else{

  productos.addEventListener("click", () => {
    ListaUsers.push({ nombre: "seba", usuario: "seba3", contraseña: "1234" });
    localStorage.setItem("lista", JSON.stringify(ListaUsers));
  console.log(ListaUsers)
  
  });
  
}