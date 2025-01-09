//  a rotina abaixo Carrega o que estiver no arquivo CSV e converte em array de objetos
  // assim temos o acesso das umagens e os outros campos cadastrado para cada uma das cartas desejadas
  // sendo assim não precisamos cadastrar todas as imagens como feito anteriormente
  // para exemplo cadastramos o DECK de X-MEN neste arquivo Cartas.csv
  
 console.log(dadosCarregados);


  // trabalho com questoes da janela
// Resolução mínima desejada e avisos a respeito
const MIN_WIDTH = 1900;  // Largura mínima
const MIN_HEIGHT = 800; // Altura mínima
document.addEventListener('click', () => {
        if (document.fullscreenEnabled) {
          document.documentElement.requestFullscreen();
          // teste para verificar no console
          console.log(window.innerWidth);
          console.log(window.innerHeight);
          
        }
  });
function checkResolution() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const warning = document.getElementById("resolution-warning");
      
        if (width < MIN_WIDTH || height < MIN_HEIGHT) {
            alert(`A resolução mínima necessária é ${MIN_WIDTH}x${MIN_HEIGHT}.
                 Ajuste sua janela. ela está com apenas ${width}x${height} , considere ajustar a configuração do seu vídeo para maior resolução`);

            warning.style.display = "block"; // Mostra o aviso
        } else {
          warning.style.display = "none"; // Oculta o aviso
        }
}
window.onload = checkResolution;
window.onresize = checkResolution;
    
// implementando o sistema de arrastar e soltar..
// para isto ajustado o draggable="true"  
// draggableDiv.setAttribute("draggable", "true")
// criar um evento de drag start em para cada carta

// as rptinas abaixo do DOMContentLoades só são executadas quando tudo está
// devidamente carregado
document.addEventListener('DOMContentLoaded', () => {
const areaDestino = document.getElementById('fzonet');
areaDestino.addEventListener('dragover', (event) => {
  event.preventDefault(); // Permite que a área de destino aceite o evento de drop
});
const areaDestino2 = document.getElementById('fzoned');
areaDestino2.addEventListener('dragover', (event) => {
  event.preventDefault(); // Permite que a área de destino aceite o evento de drop
});

const areaDestino3 = document.getElementById('szonet');
areaDestino3.addEventListener('dragover', (event) => {
  event.preventDefault(); // Permite que a área de destino aceite o evento de drop
});

const areaDestino4 = document.getElementById('szoned');
areaDestino4.addEventListener('dragover', (event) => {
  event.preventDefault(); // Permite que a área de destino aceite o evento de drop
});

// Adicione o evento de `drop` à área de destino
areaDestino.addEventListener('drop', (event) => {
  event.preventDefault(); // Evita o comportamento padrão de drop
  const cartaId = event.dataTransfer.getData('text/plain');
  const cartasolta = document.getElementById(cartaId);
  console.log(cartaId);
  areaDestino.appendChild(cartasolta);
  console.log('Carta foi solta na área de destino!');

});
areaDestino2.addEventListener('drop', (event) => {
  event.preventDefault(); // Evita o comportamento padrão de drop
  const cartaId = event.dataTransfer.getData('text/plain');
  const cartasolta = document.getElementById(cartaId);
  console.log(cartaId);
  areaDestino2.appendChild(cartasolta);
  console.log('Carta foi solta na área de destino!');


});
areaDestino3.addEventListener('drop', (event) => {
  event.preventDefault(); // Evita o comportamento padrão de drop
  const cartaId = event.dataTransfer.getData('text/plain');
  const cartasolta = document.getElementById(cartaId);
  console.log(cartaId);
  areaDestino3.appendChild(cartasolta);
  console.log('Carta foi solta na área de destino!');
});
areaDestino4.addEventListener('drop', (event) => {
  event.preventDefault(); // Evita o comportamento padrão de drop
  const cartaId = event.dataTransfer.getData('text/plain');
  const cartasolta = document.getElementById(cartaId);
  console.log(cartaId);
  areaDestino4.appendChild(cartasolta);
  console.log('Carta foi solta na área de destino!');


});

})

function cartaarrastada(event){
  const carta = event.target;
  console.log("Carta sendo arrastada: ",carta.id);
  console.log("Carta sendo arrastada: " + (carta.alt+" "+carta.src));
  event.dataTransfer.setData('text/plain', event.target.id);
 };




  