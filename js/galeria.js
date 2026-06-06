// =============================================
// galeria.js — filtros, modal e navegação da galeria
// =============================================

const botoesFiltro = document.querySelectorAll(".filtro-btn");
const secoesGaleria = document.querySelectorAll(".galeria-secao");
const cardsGaleria = document.querySelectorAll(".galeria-card");

const modal = document.getElementById("modal-galeria");
const modalImg = document.getElementById("modal-img");
const modalTitulo = document.getElementById("modal-titulo");
const modalDescricao = document.getElementById("modal-descricao");
const fecharModal = document.getElementById("fechar-modal");
const btnModalPrev = document.getElementById("modal-prev");
const btnModalNext = document.getElementById("modal-next");

let cardsVisiveis = [];
let cardAtualIndex = 0;

function atualizarCardsVisiveis() {
    cardsVisiveis = Array.from(cardsGaleria).filter(function (card) {
        const secaoPai = card.closest(".galeria-secao");
        const cardVisivel = card.style.display !== "none";
        const secaoVisivel = !secaoPai || !secaoPai.classList.contains("escondida");

        return cardVisivel && secaoVisivel;
    });
}

function preencherModal(card) {
    const img = card.querySelector("img");
    const titulo = card.querySelector("h3");
    const descricao = card.querySelector("p");

    modalImg.src = img ? img.src.trim() : "";
    modalImg.alt = img ? img.alt : "";
    modalTitulo.textContent = titulo ? titulo.textContent : "";
    modalDescricao.textContent = descricao ? descricao.textContent : "";
}

botoesFiltro.forEach(function (botao) {
    botao.addEventListener("click", function () {
        const filtro = botao.dataset.filter;

        botoesFiltro.forEach(function (btn) {
            btn.classList.remove("ativo");
        });

        botao.classList.add("ativo");

        if (filtro === "todos") {
            secoesGaleria.forEach(function (secao) {
                secao.classList.remove("escondida");
            });

            cardsGaleria.forEach(function (card) {
                card.style.display = "";
            });
        } else {
            secoesGaleria.forEach(function (secao) {
                const categoriasSecao = secao.dataset.secao || "";

                if (categoriasSecao.includes(filtro)) {
                    secao.classList.remove("escondida");
                } else {
                    secao.classList.add("escondida");
                }
            });

            cardsGaleria.forEach(function (card) {
                const categoriasCard = card.dataset.category || "";

                if (categoriasCard.includes(filtro)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });
        }

        atualizarCardsVisiveis();
    });
});

function abrirModal(card) {
    if (!modal || !modalImg || !modalTitulo || !modalDescricao) return;

    atualizarCardsVisiveis();
    cardAtualIndex = cardsVisiveis.indexOf(card);

    if (cardAtualIndex < 0) {
        cardAtualIndex = 0;
    }

    preencherModal(card);

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    modal.classList.remove("modal-hidden");
    document.body.classList.add("modal-aberto");
}

function fecharGaleriaModal() {
    if (!modal) return;

    modal.classList.add("modal-hidden");
    document.body.classList.remove("modal-aberto");
}

function trocarImagemModal(direcao) {
    if (!modal || modal.classList.contains("modal-hidden")) return;
    if (cardsVisiveis.length === 0) return;

    cardAtualIndex += direcao;

    if (cardAtualIndex < 0) {
        cardAtualIndex = cardsVisiveis.length - 1;
    }

    if (cardAtualIndex >= cardsVisiveis.length) {
        cardAtualIndex = 0;
    }

    preencherModal(cardsVisiveis[cardAtualIndex]);
}

cardsGaleria.forEach(function (card) {
    card.addEventListener("click", function () {
        abrirModal(card);
    });
});

if (fecharModal) {
    fecharModal.addEventListener("click", fecharGaleriaModal);
}

if (modal) {
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            fecharGaleriaModal();
        }
    });
}

if (btnModalPrev) {
    btnModalPrev.addEventListener("click", function (event) {
        event.stopPropagation();
        trocarImagemModal(-1);
    });
}

if (btnModalNext) {
    btnModalNext.addEventListener("click", function (event) {
        event.stopPropagation();
        trocarImagemModal(1);
    });
}

document.addEventListener("keydown", function (event) {
    if (!modal || modal.classList.contains("modal-hidden")) return;

    if (event.key === "Escape") {
        fecharGaleriaModal();
    }

    if (event.key === "ArrowLeft") {
        trocarImagemModal(-1);
    }

    if (event.key === "ArrowRight") {
        trocarImagemModal(1);
    }
});

atualizarCardsVisiveis();
