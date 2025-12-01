// Seleção dos elementos principais
const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const imagem = document.getElementById("imagem");

const btnItalia = document.getElementById("btnItalia");
const btnJapao = document.getElementById("btnJapao");
const btnMexico = document.getElementById("btnMexico");

const btnTema = document.getElementById("btnTema");
const body = document.body;

//   troca do conteúdo do card 
function atualizarCard(novoTitulo, novaDesc, novaImg) {
  titulo.textContent = novoTitulo;
  descricao.textContent = novaDesc;
  imagem.src = novaImg;

  // animação de fade suave
  imagem.classList.remove("fade");
  imagem.classList.add("fade");
}

//  botões dos países 
btnItalia.addEventListener("click", () => {
  atualizarCard(
    "Pizza Italiana",
    "A clássica pizza napolitana, feita com molho de tomate fresco e queijo de qualidade.",
    "img/italia.jpg"
  );
});

btnJapao.addEventListener("click", () => {
  atualizarCard(
    "Sushi Japonês",
    "Pequenos pedaços de arte culinária feitos com arroz temperado e peixe fresco.",
    "img/japao.jpg"
  );
});

btnMexico.addEventListener("click", () => {
  atualizarCard(
    "Taco Mexicano",
    "Tortilla crocante recheada com carne temperada, alface, queijo e muito sabor!",
    "img/mexico.jpg"
  );
});

//  Tema Claro/Escuro 
btnTema.addEventListener("click", () => {
  if (body.classList.contains("claro")) {
    body.classList.replace("claro", "escuro");
    btnTema.textContent = "Tema Claro";
  } else {
    body.classList.replace("escuro", "claro");
    btnTema.textContent = "Tema Escuro";
  }
});
