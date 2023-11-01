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

const listaDeTeclas = document.querySelectorAll(".tecla");

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

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const classeTecla = tecla.classList[1];
  const idAudio = `#som_${classeTecla}`;
  tecla.addEventListener("click", () => {
    document.querySelector(idAudio).play();
  });
}

// for (let i = 0; i < listaDeTeclas.length; i++) {
//   listaDeTeclas[i].addEventListener("click", () => {
//     document.querySelector("#som_tecla_pom").play();
//   });
// }