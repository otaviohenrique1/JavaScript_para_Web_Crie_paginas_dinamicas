// document.querySelector(".tecla_pom").addEventListener("click", () => {
//   document.querySelector("#som_tecla_pom").play();
// });

// document.querySelector(".tecla_clap").addEventListener("click", () => {
//   document.querySelector("#som_tecla_clap").play();
// });

// document.querySelector(".tecla_tim").addEventListener("click", () => {
//   document.querySelector("#som_tecla_tim").play();
// });

// document.querySelector(".tecla_puff").addEventListener("click", () => {
//   document.querySelector("#som_tecla_puff").play();
// });

// document.querySelector(".tecla_splash").addEventListener("click", () => {
//   document.querySelector("#som_tecla_splash").play();
// });

// document.querySelector(".tecla_toim").addEventListener("click", () => {
//   document.querySelector("#som_tecla_toim").play();
// });

// document.querySelector(".tecla_psh").addEventListener("click", () => {
//   document.querySelector("#som_tecla_psh").play();
// });

// document.querySelector(".tecla_tic").addEventListener("click", () => {
//   document.querySelector("#som_tecla_tic").play();
// });

// document.querySelector(".tecla_tom").addEventListener("click", () => {
//   document.querySelector("#som_tecla_tom").play();
// });

// const listaDeTeclas = document.querySelectorAll(".tecla");

// listaDeTeclas[0].addEventListener("click", () => {
//   document.querySelector("#som_tecla_pom").play();
// });

// function tocaSom(idElementoAudio) {
//   document.querySelector(idElementoAudio).play();
// }

// let contador = 0;
// while (contador < listaDeTeclas.length) {
//   const classeTecla = listaDeTeclas[contador].classList[1];
//   listaDeTeclas[contador].addEventListener("click", () => {
//     // document.querySelector("#som_tecla_pom").play();
//     tocaSom(`#som_${classeTecla}`);
//   });
//   contador++;
// }

function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === "audio") {
    elemento.play();
  } else {
    // alert("Elemento não encontrado")
    console.log("Elemento não encontrado ou seletor inválido")
  }

}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  
  const classeTecla = tecla.classList[1];
  
  const idAudio = `#som_${classeTecla}`;
  
  tecla.addEventListener("click", () => {
    tocaSom(idAudio);
  });
  
  /* quando a tecla estiver abaixada */
  tecla.onkeydown = (evento) => {
    // console.log(evento.code);
    if (evento.code == "Space" || evento.code == "Enter" || evento.code == "NumpadEnter") {
      tecla.classList.add("ativa");
    }
    // tecla.classList.toggle("ativa");
  }

  /* quando a tecla estiver levantada */
  tecla.onkeyup = () => {
    tecla.classList.remove("ativa");
  }
}
