const lendaLutadores = document.querySelector('.lendas-lutadores');

const btnDireita = document.querySelector('.botao-direita');
const btnEsquerda = document.querySelector('.botao-esquerda');

const larguraCard = 325;
const cardsPorClique = 3;

btnDireita.addEventListener('click', () => {
    lendaLutadores.scrollLeft += larguraCard * cardsPorClique;
});

btnEsquerda.addEventListener('click', () => {
    lendaLutadores.scrollLeft -= larguraCard * cardsPorClique;
});

const astroLutadores = document.querySelector('.astro-lutadores');

const btnDireitaAstro = document.querySelectorAll('.botao-direita')[1];
const btnEsquerdaAstro = document.querySelectorAll('.botao-esquerda')[1];

btnDireitaAstro.addEventListener('click', () => {
    astroLutadores.scrollLeft += larguraCard * cardsPorClique;
});

btnEsquerdaAstro.addEventListener('click', () => {
    astroLutadores.scrollLeft -= larguraCard * cardsPorClique;
});

const promessasLutadores = document.querySelector('.promessas-lutadores');

const btnDireitaPromessa = document.querySelectorAll('.botao-direita')[2];
const btnEsquerdaPromessa = document.querySelectorAll('.botao-esquerda')[2];

btnDireitaPromessa.addEventListener('click', () => {
    promessasLutadores.scrollLeft += larguraCard * cardsPorClique;
});

btnEsquerdaPromessa.addEventListener('click', () => {
    promessasLutadores.scrollLeft -= larguraCard * cardsPorClique;
});

const cinturaoLutadores = document.querySelector('.cinturao-lutadores');

const btnDireitacinturao = document.querySelectorAll('.botao-direita')[3];
const btnEsquerdacinturao = document.querySelectorAll('.botao-esquerda')[3];

btnDireitacinturao.addEventListener('click', () => {
    cinturaoLutadores.scrollLeft += larguraCard * cardsPorClique;
});

btnEsquerdacinturao.addEventListener('click', () => {
    cinturaoLutadores.scrollLeft -= larguraCard * cardsPorClique;
});