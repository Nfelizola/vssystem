/* aqui basicamente teremos todas
  as cartas(imagens) do Baralho */
const quantidadeCartas = Math.floor(Math.random() * 10) + 1;
const imagensPossiveis = [
    "./img/deck-xmen/acarga.jpg",
    "./img/deck-xmen/arcanjo.jpg",
    "./img/deck-xmen/arcanjo.jpg",
    "./img/deck-xmen/armadurakevlar.jpg",
    "./img/deck-xmen/ataquesurpresa.jpg",
    "./img/deck-xmen/atencaomedica.jpg",
    "./img/deck-xmen/banshee.jpg",
    "./img/deck-xmen/banshee.jpg",
    "./img/deck-xmen/campodeforcapessoal.jpg",
    "./img/deck-xmen/cerebro.jpg",
    "./img/deck-xmen/ciclope.jpg",
    "./img/deck-xmen/ciclope.jpg",
    "./img/deck-xmen/ciclopev2.jpg",
    "./img/deck-xmen/ciclopev2.jpg",
    "./img/deck-xmen/colossus.jpg",
    "./img/deck-xmen/corporacaox.jpg",
    "./img/deck-xmen/corporacaox.jpg",
    "./img/deck-xmen/cristal.jpg",
    "./img/deck-xmen/cristal.jpg",
    "./img/deck-xmen/desvioacrobatico.jpg",
    "./img/deck-xmen/duplaarma.jpg",
    "./img/deck-xmen/duplaarma.jpg",
    "./img/deck-xmen/escolaxavier.jpg",
    "./img/deck-xmen/escolaxavier.jpg",
    "./img/deck-xmen/explosaofocada.jpg",
    "./img/deck-xmen/fastballspecial.jpg",
    "./img/deck-xmen/fenixnegra.jpg",
    "./img/deck-xmen/fera.jpg",
    "./img/deck-xmen/fera.jpg",
    "./img/deck-xmen/filhosdoatomo.jpg",
    "./img/deck-xmen/gambit.jpg",
    "./img/deck-xmen/golpefinal.jpg",
    "./img/deck-xmen/hardwareavancado.jpg",
    "./img/deck-xmen/homemdegelo.jpg",
    "./img/deck-xmen/homemdegelo.jpg",
    "./img/deck-xmen/institutoxavier.jpg",
    "./img/deck-xmen/ilhamuir.jpg",
    "./img/deck-xmen/ilhamuir.jpg",
    "./img/deck-xmen/jeangrey.jpg",
    "./img/deck-xmen/jeangrey.jpg",
    "./img/deck-xmen/jeangreyv2.jpg",
    "./img/deck-xmen/lincenegra.jpg",
    "./img/deck-xmen/lincenegra.jpg",
    "./img/deck-xmen/longshot.jpg",
    "./img/deck-xmen/melhoriatecnologica.jpg",
    "./img/deck-xmen/moiramactaggert.jpg",
    "./img/deck-xmen/noturno.jpg",
    "./img/deck-xmen/passaronegro.jpg",
    "./img/deck-xmen/pontapevoador.jpg",
    "./img/deck-xmen/professorx.jpg",
    "./img/deck-xmen/professorxv2.jpg",
    "./img/deck-xmen/professorxv2.jpg",
    "./img/deck-xmen/psylocke.jpg",
    "./img/deck-xmen/psylocke.jpg",
    "./img/deck-xmen/rogue.jpg",
    "./img/deck-xmen/rogue.jpg",
    "./img/deck-xmen/saladeperigo.jpg",
    "./img/deck-xmen/tempestade.jpg",
    "./img/deck-xmen/tempestade.jpg",
    "./img/deck-xmen/toothandclaw.jpg",
    "./img/deck-xmen/Wolverine.jpg",
    "./img/deck-xmen/Wolverine.jpg"
];
const imagensPossiveis2=imagensPossiveis;
const deckContainer = document.getElementById("decktop");
const deckContainer2 = document.getElementById("deckbottom");

function embaralharArray(array) {
    return array.sort(() => Math.random() - 0.5);
};
const deckembaralhado = embaralharArray([...imagensPossiveis]);
const cartasmesa = deckembaralhado.splice(1, quantidadeCartas);
cartasmesa.forEach((imagem, index) => {
    // Criar o contêiner da carta
        const cartaDiv = document.createElement("div");
        cartaDiv.classList.add("carta");
        cartaDiv.id = `ct${index + 1}`; // Define ID único (c1, c2, etc.)
        // Criar a imagem
        const img = document.createElement("img");
     ;
        img.src = imagem; // Define o caminho da imagem
        img.alt = imagem; // Adiciona descrição alternativa
        img.classList.add("carta"); // Define a classe CSS
        // Adicionar a imagem ao contêiner da carta
        cartaDiv.appendChild(img);
        // Adicionar a carta ao contêiner principal
        deckContainer.appendChild(cartaDiv);
        //exibindo apenas para checagem as cartas que sobraram no baralho que esta embaralhado sobre a mesa
            
    });
    const cartasdeck = document.getElementById("nctop")
        cartasdeck.innerText=deckembaralhado.length;

// para o segundo deck
const deckembaralhado2 = embaralharArray([...imagensPossiveis2]);
const cartasmesa2 = deckembaralhado2.splice(1, quantidadeCartas);
cartasmesa2.forEach((imagem, index) => {
    // Criar o contêiner da carta
        const cartaDiv2 = document.createElement("div");
        cartaDiv2.classList.add("carta");
        cartaDiv2.id = `cd${index + 1}`; // Define ID único (c1, c2, etc.)
        // Criar a imagem
        const img = document.createElement("img");
     ;
        img.src = imagem; // Define o caminho da imagem
        img.alt = imagem; // Adiciona descrição alternativa
        img.classList.add("carta"); // Define a classe CSS
        // Adicionar a imagem ao contêiner da carta
        cartaDiv2.appendChild(img);
        // Adicionar a carta ao contêiner principal
        deckContainer2.appendChild(cartaDiv2);
        //exibindo apenas para checagem as cartas que sobraram no baralho que esta embaralhado sobre a mesa
            
    });
    const cartasdeck2 = document.getElementById("ncbottom");
    cartasdeck2.innerText=deckembaralhado2.length;
    
    // tratamento mouse over
    const cards = document.querySelectorAll('.carta');

    // Adiciona eventos de mouseover e mouseout em cada carta
    cards.forEach(card => {
      card.addEventListener('mouseover', () => {
        console.log(card.id.substring(0,2));
        if (card.id.substring(0,2)=="ct"){
            card.classList.add('hoveredtop'); // Adiciona a classe de destaque
        }else{
            card.classList.add('hovereddown');
        };
      });

      card.addEventListener('mouseout', () => {
      card.classList.remove('hoveredtop');
      card.classList.remove('hovereddown');
        
        // Remove a classe de destaque
      });
    });
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
    
    
