const seleccionar1 = document.getElementById("B mascotas");
const sectionSeleccionarAtaque = document.getElementById(
  "Elige_ataque_de_tu_mascota"
);
const botondereiniciar = document.getElementById("B_reiniciar");
const Botonreinicio = document.getElementById("B_reiniciar");
const botonMascotaJugador = document.getElementById("B mascotas");
const Bagua = document.getElementById("B agua");
const Bfuego = document.getElementById("B fuego");
const Btierra = document.getElementById("B tierra");
let MascotaJugador;
const contenedordeataques = document.getElementById("contenedordeataques");
const contenedor = document.getElementById("contenedor");
let botones = {};
let opciondepokemones;
let imputRippa;
let imputZachi;
let imputTarri;
let imputPazza;
let imputTarschi;
let imputTapic;
let ataquespokemon;
let botondeagua;
let botondeFuego;
let botondetierra;
let ataquejugador = [];

let pokemones1 = [];
class Pokemones {
  constructor(vida, foto, nombre) {
    this.vida = vida;
    this.foto = foto;
    this.nombre = nombre;
    this.ataques = [];
  }
}

let Rippa = new Pokemones(4, "./Imagenes/foteli.png", "Rippa");
let Zachi = new Pokemones(3, "./Imagenes/foto2.png", "Zachi");
let Tarri = new Pokemones(6, "./Imagenes/foto3.png", "Tarri");
let Pazza = new Pokemones(5, "./Imagenes/foto4.png", "Pazza");
let Tarschi = new Pokemones(4, "./Imagenes/foto5.png", "Tarschi");
let Tapic = new Pokemones(4, "./Imagenes/foto6.png", "Tapic");

Rippa.ataques.push(
  { nombre: "💧", id: "B agua" },

  { nombre: "🔥", id: "B fuego" },
  { nombre: "🧱", id: "B tierra" }
);
Zachi.ataques.push(
  { nombre: "🧱", id: "B tierra" },

  { nombre: "🔥", id: "B fuego" },
  { nombre: "💧", id: "B agua" }
);
Tarri.ataques.push(
  { nombre: "🔥", id: "B fuego" },

  { nombre: "💧", id: "B agua" },
  { nombre: "🧱", id: "B tierra" }
);
Pazza.ataques.push(
  { nombre: "💧", id: "B agua" },

  { nombre: "🔥", id: "B fuego" },
  { nombre: "🧱", id: "B tierra" }
);
Tarschi.ataques.push(
  { nombre: "💧", id: "B agua" },

  { nombre: "🔥", id: "B fuego" },
  { nombre: "🧱", id: "B tierra" }
);
Tapic.ataques.push(
  { nombre: "💧", id: "B agua" },

  { nombre: "🔥", id: "B fuego" },
  { nombre: "🧱", id: "B tierra" }
);

pokemones1.push(Rippa, Zachi, Tarri, Pazza, Tarschi, Tapic);

function reiniciar() {
  window.location.reload();
}
function activarboton() {
  seleccionar1.disabled = false;
}
function desactivarBotones() {
  botondeagua.disabled = true;
  botondeFuego.disabled = true;
  botondetierra.disabled = true;
  botondereiniciar.style.display = "block";
}
function iniciarjuego() {
  sectionSeleccionarAtaque.style.display = "none";

  pokemones1.forEach((Pokemones) => {
    opciondepokemones = `
    <label class="seleccionDeKokemon" for=${Pokemones.nombre}>${Pokemones.nombre}
    <img src=${Pokemones.foto} alt=${Pokemones.nombre}>
    <input type="radio" name="mascotas" id=${Pokemones.nombre} /> 
    </label>  
    `;
    contenedor.innerHTML += opciondepokemones;

    imputRippa = document.getElementById("Rippa");
    imputZachi = document.getElementById("Zachi");
    imputTarri = document.getElementById("Tarri");
    imputPazza = document.getElementById("Pazza");
    imputTarschi = document.getElementById("Tarschi");
    imputTapic = document.getElementById("Tapic");
  });

  botondereiniciar.style.display = "none";
  Botonreinicio.addEventListener("click", reiniciar);
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  imputRippa.addEventListener("click", activarboton);
  imputZachi.addEventListener("click", activarboton);
  imputTarri.addEventListener("click", activarboton);
  imputPazza.addEventListener("click", activarboton);
  imputTarschi.addEventListener("click", activarboton);
  imputTapic.addEventListener("click", activarboton);
}
function seleccionarMascotaJugador() {
  seleccionarMascotaEnemiga();
  let imputRippa = document.getElementById("Rippa");
  let imputZachi = document.getElementById("Zachi");
  let imputTarri = document.getElementById("Tarri");
  let imputPazza = document.getElementById("Pazza");
  let imputTarschi = document.getElementById("Tarschi");
  let imputTapic = document.getElementById("Tapic");

  let spanSeleccionar_Mascota = document.getElementById("Mascotajugador");

  if (imputRippa.checked) {
    spanSeleccionar_Mascota.innerHTML = imputRippa.id;
    MascotaJugador = imputRippa.id;
  } else if (imputZachi.checked) {
    spanSeleccionar_Mascota.innerHTML = imputZachi.id;
    MascotaJugador = imputZachi.id;
  } else if (imputTarri.checked) {
    spanSeleccionar_Mascota.innerHTML = imputTarri.id;
    MascotaJugador = imputTarri.id;
  } else if (imputPazza.checked) {
    spanSeleccionar_Mascota.innerHTML = imputPazza.id;
    MascotaJugador = imputPazza.id;
  } else if (imputTarschi.checked) {
    spanSeleccionar_Mascota.innerHTML = imputTarschi.id;
    MascotaJugador = imputTarschi.id;
  } else if (imputTapic.checked) {
    spanSeleccionar_Mascota.innerHTML = imputTapic.id;
    MascotaJugador = imputTapic.id;
  }

  extraerataques(MascotaJugador);
  function extraerataques(MascotaJugador) {
    let ataques;
    for (let i = 0; i < pokemones1.length; i++) {
      if (MascotaJugador === pokemones1[i].nombre) {
        ataques = pokemones1[i].ataques;
      }
    }
    mostrarataques(ataques);
  }

  function mostrarataques(ataques) {
    ataques.forEach((ataque) => {
      ataquespokemon = `<button id="${ataque.id}" class="botonataque BAtaque">${ataque.nombre}</button>`;
      contenedordeataques.innerHTML += ataquespokemon;
    });

    botondeagua = document.getElementById("B agua");
    botondeFuego = document.getElementById("B fuego");
    botondetierra = document.getElementById("B tierra");

    botones = document.querySelectorAll(".BAtaque");

    botondeagua.addEventListener("click", ataqueAgua);

    botondeFuego.addEventListener("click", ataqueFuego);

    botondetierra.addEventListener("click", ataqueTierra);
  }

  function secuenciaAtaque() {
    botones.forEach((boton) => {
      boton.addEventListener("click", (e) => {
        if (e.target.textContent === "🔥") {
          ataquejugador.push("fuego");
          console.log(ataquejugador);
        } else if (e.target.textContent === "💧") {
          ataquejugador.push("agua");
          console.log(ataquejugador);
        } else if (e.target.textContent === "🧱") {
          ataquejugador.push("tierra");
          console.log(ataquejugador);
        }
      });
    });
  }

  sectionSeleccionarAtaque.style.display = "flex";

  let seleccionarMascota = document.getElementById("Seleccionar_mascota");
  seleccionarMascota.style.display = "none";
  secuenciaAtaque();
}
function ataqueAgua() {
  ataqueJugador = "Agua";
  crearmensaje();
}
function ataqueFuego() {
  ataqueJugador = "Fuego";
  crearmensaje();
}
function ataqueTierra() {
  ataqueJugador = "Tierra";
  crearmensaje();
}
function vidasaliadas() {
  let vidasaliadas = document.getElementById("ma");
  vidasaliadas.innerHTML = vidasaliadas.innerHTML - 1;
  if (vidasaliadas.innerHTML < 1) {
    alert("Lo siento Perdiste");
    desactivarBotones();
  }
}
function vidasenemigas() {
  let vidasenemigas = document.getElementById("me");
  vidasenemigas.innerHTML = vidasenemigas.innerHTML - 1;
  if (vidasenemigas.innerHTML < 1) {
    alert("Felicidades Ganaste!");
    desactivarBotones();
  }
}
function crearmensaje() {
  let Pendiente;
  let elataquedelenemigo = ataqueEnemigo();
  if (ataqueJugador == "Agua" && elataquedelenemigo == "Fuego") {
    Pendiente = " Ganaste!";
    vidasenemigas();
  } else if (ataqueJugador == "Tierra" && elataquedelenemigo == "Agua") {
    Pendiente = " Ganaste!";
    vidasenemigas();
  } else if (ataqueJugador == "Fuego" && elataquedelenemigo == "Tierra") {
    Pendiente = " Ganaste!";
    vidasenemigas();
  } else if (ataqueJugador == elataquedelenemigo) {
    Pendiente = " Empate!";
  } else if (elataquedelenemigo == "Agua" && ataqueJugador == "Fuego") {
    Pendiente = " Perdiste";
    vidasaliadas();
  } else if (elataquedelenemigo == "Tierra" && ataqueJugador == "Agua") {
    Pendiente = " Perdiste!";
    vidasaliadas();
  } else if (elataquedelenemigo == "Fuego" && ataqueJugador == "Tierra") {
    Pendiente = " Perdiste!";
    vidasaliadas();
  }
  let sectionmensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");
  parrafo.innerHTML =
    " Atacaste con " +
    ataqueJugador +
    " Tu rival ataco con " +
    elataquedelenemigo +
    Pendiente;
  sectionmensajes.appendChild(parrafo);
}
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function ataqueEnemigo() {
  let mensajes;
  let ataqueEnemigo = aleatorio(1, 3);
  if (ataqueEnemigo == 1) mensajes = "Agua";
  else if (ataqueEnemigo == 2) mensajes = "Fuego";
  else if (ataqueEnemigo == 3) mensajes = "Tierra";
  return mensajes;
}
function seleccionarMascotaEnemiga() {
  let spanMascotaEnemiga = document.getElementById("MascotaEnemiga");
  function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let ataqueAleatorio = aleatorio(1, 6);
  if (ataqueAleatorio == 1) spanMascotaEnemiga.innerHTML = "Rippa";
  else if (ataqueAleatorio == 2) spanMascotaEnemiga.innerHTML = "Zachi";
  else if (ataqueAleatorio == 3) spanMascotaEnemiga.innerHTML = "Tarri";
  else if (ataqueAleatorio == 4) spanMascotaEnemiga.innerHTML = "Pazza";
  else if (ataqueAleatorio == 5) spanMascotaEnemiga.innerHTML = "Tarschi";
  else spanMascotaEnemiga.innerHTML = "Tapic";
}

window.addEventListener("load", iniciarjuego);
