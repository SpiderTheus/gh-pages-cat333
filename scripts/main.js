let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/lua.png') {
      minhaImagem.setAttribute ('src','imagens/ted.png');
    } else {
      minhaImagem.setAttribute ('src','imagens/zeus.png');
        if(meuSrc === 'imagens/zeus.png') {
          minhaImagem.setAttribute ('src', 'imagens/lua.png')
        }
    }
}
let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if(!meuNome || meuNome === null) {
        defineNomeUsuario();
      } else {
        localStorage.setItem('nome', meuNome);
        meuCabecalho.innerHTML = 'Tenho 3 gatos, ' + meuNome + '.';
      }
}

if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
  } else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Tenho 3 gatos, ' + nomeGuardado;
}
meuBotao.onclick = function() {defineNomeUsuario();
}