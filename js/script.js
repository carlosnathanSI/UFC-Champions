function trocarPagina(url, direcao) {
    const conteudo = document.querySelector(".conteudo");

    // limpa classes antigas (IMPORTANTE)
    conteudo.classList.remove(
        "entrando-direita",
        "entrando-esquerda",
        "saindo-direita",
        "saindo-esquerda"
    );

    if (direcao === "direita") {
        conteudo.classList.add("saindo-direita");
    } else {
        conteudo.classList.add("saindo-esquerda");
    }

    setTimeout(() => {
        window.location.href = url;
    }, 600);
}

async function carregarPagina(pagina, direcao) {
    const app = document.getElementById("app");

    app.classList.add(direcao === "direita" ? "sair-direita" : "sair-esquerda");

    setTimeout(async () => {
        const res = await fetch(pagina);
        const html = await res.text();

        app.innerHTML = html;

        app.classList.remove("sair-direita", "sair-esquerda");
        app.classList.add(direcao === "direita" ? "entrar-direita" : "entrar-esquerda");
    }, 300);
}

document.querySelector("a").addEventListener("click", function(e){
  e.preventDefault();

  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = this.href;
  }, 300);
});

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e){

    if(this.href){
      e.preventDefault();

      document.body.classList.add("fade");

      setTimeout(() => {
        window.location.href = this.href;
      }, 350);
    }
  });
});


const videos = document.querySelectorAll(".lazy-video");

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      const video = entry.target;
      const source = video.querySelector("source");

      source.src = source.dataset.src;

      video.load();
      video.play();

      observer.unobserve(video);

    }

  });

});

videos.forEach(video => {
  observer.observe(video);
});