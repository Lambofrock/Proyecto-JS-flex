// popup-----------------------------------------------------------------------------------------
const btnIniciarPop = document.getElementById("iniciar-pop");
const UPop = document.getElementById("User-pop");
const btnChao = document.getElementById("btnChao");
const btnChao2 = document.getElementById("btnChao2");
const btncrearU = document.getElementById("crearU");
const Rpop = document.getElementById("Regis-pop");

//boton debug-------------------------------------------------------------------------------------------
const debug = document.getElementById("debug");
debug.addEventListener("click", () => {
  Toastify({
    text: "borrado el cache",
    duration: 3000,
  }).showToast();
  UPop.classList.remove("open");
  Rpop.classList.remove("open");
  localStorage.removeItem("usuarioGlobal");
  localStorage.removeItem("lista");
  //para sacar y borrar todo
});

let ListaUsers = JSON.parse(localStorage.getItem("lista"));
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

// Usuario--------------------------------------------------------------------------------------

class Usuario {
  constructor(nombre, usuario, contraseña) {
    this.nombre = nombre;
    this.usuario = usuario;
    this.contraseña = contraseña;
  }
}

const RUsuario = document.getElementById("RUsuario");
const RContraseña = document.getElementById("RContraseña");
const btnRegisU = document.getElementById("registrar");
const NombreUser = document.getElementById("NombreUser");
const btnniciar = document.getElementById("iniciar");

//--------------------------------------------------------------------------------------------------------------------------
//para saber si hay usuario
if (ListaUsers === null) {
  ListaUsers = [];

  btnRegisU.addEventListener("click", () => {
    const usuarioN = new Usuario(
      NombreUser.value,
      RUsuario.value,
      RContraseña.value
    );

    if (usuarioN.usuario === "") {
      Swal.fire({
        icon: "error",
        title: "debe ingresar un nombre",
      });
    } else if (usuarioN.nombre === "") {
      Swal.fire({
        icon: "error",
        title: "debe ingresar nombre de usuario",
      });
    } else if (usuarioN.contraseña === "") {
      Swal.fire({
        icon: "error",
        title: "contraseña",
      });
    } else {
      ListaUsers.push(usuarioN);
      localStorage.setItem("lista", JSON.stringify(ListaUsers));
      localStorage.setItem("usuarioGlobal", JSON.stringify(ListaUsers));
      let UsuarioSession = JSON.parse(localStorage.getItem("usuarioGlobal"));
      // console.log(UsuarioSession);
      //se que no debo guardar la contraseña, pero me da lata encriptar para este demo <3
      // console.log("usuario creado correctamente");
      // console.log(usuarioN);
      Swal.fire({
        title: "inicio correcto",
        icon: "success",
      });
    }
    Rpop.classList.remove("open");
  });
  // console.log("lista de usuarios vacia");
} else {
  // console.log("ya hay usuarios registrados");
  // console.log(ListaUsers);
  btnRegisU.addEventListener("click", () => {
    const usuarioN = new Usuario(
      NombreUser.value,
      RUsuario.value,
      RContraseña.value
    );

    if (usuarioN.usuario === "") {
      Swal.fire({
        icon: "error",
        title: "debe ingresar nombre",
      });
    } else if (usuarioN.nombre === "") {
      Swal.fire({
        icon: "error",
        title: "debe ingresar nombre de usuario",
      });
    } else if (usuarioN.contraseña === "") {
      Swal.fire({
        icon: "error",
        title: "debe ingresar contraseña",
      });
    } else {
      ListaUsers.push(usuarioN);
      localStorage.setItem("lista", JSON.stringify(ListaUsers));
      //se que no debo guardar la contraseña, pero me da lata encriptar para este demo <3 y aun no veo backend
      // console.log("usuario creado correctamente");
      // console.log(usuarioN);
      Swal.fire({
        title: "usuario creado correctamente",
        icon: "success",
      });
    }
    Rpop.classList.remove("open");
  });
  localStorage.setItem("usuarioGlobal", JSON.stringify(ListaUsers));
}

// funciones de orden superior-------------------------------------(no se como integrarlas aun, quizas en los usuarios)

// filter: Crea un nuevo array con todos los elementos que pasan una prueba definida por la función.
// para buscar al usuario creado dentro del local storage

const ISesion = document.getElementById("ISesion");
const password = document.getElementById("password");
const iniciar = document.getElementById("iniciar");

//inicio de sesion primitivo
iniciar.addEventListener("click", () => {
  // console.log(ListaUsers);

  const usuarioInicio = ListaUsers.find(
    (users) => users.usuario.toLowerCase() === ISesion.value.toLowerCase()
  );

  if (
    usuarioInicio.usuario.toLowerCase() === ISesion.value.toLowerCase() &&
    usuarioInicio.contraseña.toLowerCase() === password.value.toLowerCase()
    // passwordInicio.contraseña.toLowerCase() === password.value.toLowerCase()
  ) {
    hola.innerHTML = ` Bienvenido ${usuarioInicio.nombre}!  `;
    Swal.fire({
      title: "inicio correcto",
      icon: "success",
    });
    // console.log("funciona");
    UPop.classList.remove("open");
  } else {
    Swal.fire({
      title: "usuario o contraseña incorrecta",
      icon: "error",
    });
  }
});

setTimeout(() => {
    Toastify({
  style: {
    background: "rgb(146, 20, 12)",
  
  },
  onClick:function (){
UPop.classList.add("open")
  },
text: "Ingresa tu usuario para mejor experiencia",
duration: 4000

}).showToast();
}, 2000);

