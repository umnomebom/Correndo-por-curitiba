// Espera o conteúdo HTML da página ser completamente carregado antes de executar o script
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona os elementos HTML com os quais vamos interagir
  const botaoMudarTexto = document.getElementById("botaoMudarTexto");
  const paragrafoInterativo = document.getElementById("paragrafoInterativo");
  // const imagemExemplo = document.getElementById("imagemExemplo");
  // Adiciona uma URL de imagem de exemplo (você pode trocar por outra)
  // Usaremos uma imagem de placeholder
  // imagemExemplo.src =
  //   "https://www.qualysessa.com.br/painel/dbanexos/dbimagens/08-2021/820c343bb6c8314e3d56b18c10bc1558.jpg";
  // imagemExemplo.alt = "Imagem de exemplo azul com texto branco";
  // Verifica se o botão foi encontrado na página
  if (botaoMudarTexto) {
    // Adiciona um "ouvinte de evento" ao botão.
    // Isso faz com que uma função seja executada quando o botão é clicado.
    botaoMudarTexto.addEventListener("click", function () {
      // Ação a ser realizada quando o botão for clicado:
      // Mudar o texto do parágrafo
      if (paragrafoInterativo) {
        paragrafoInterativo.textContent = "O texto foi alterado pelo JavaScript!";
      } else {
        console.error('Elemento com ID "paragrafoInterativo" não encontrado.');
      }
      // Você também pode mudar o estilo, por exemplo:
      // paragrafoInterativo.style.color = 'blue';
      // paragrafoInterativo.style.fontWeight = 'bold';
      console.log("O botão foi clicado!"); // Mensagem no console do navegador
    });
  } else {
    console.error('Elemento com ID "botaoMudarTexto" não encontrado.');
  }
  changeActivePage();
  // Exemplo de como exibir algo no console do navegador
  console.log("O script JavaScript foi carregado e executado!");
});

function changeActivePage() {
  // Obtém todos os links de navegação
  const links = document.querySelectorAll("nav a");
  // Obtém o caminho da URL atual
  const currentPath = window.location.pathname.split("/").pop();
  links.forEach((link) => {
    if (link.getAttribute("href") === currentPath) link.classList.add("active");
  });
}
