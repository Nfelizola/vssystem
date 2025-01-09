let ImagensPossiveis=[];
let Cartas;
let posicao=0;
const dadosCarregados = new Promise((resolve, reject)=>{
d3.csv("cartas.csv").then(data => {
  // Exibe os dados no console para verificação
  
  // Suponha que você queira manipular os dados em outro lugar do seu código
  Cartas = data; // `data` já é um array de objetos
// Agora você pode usar `arrayDeCartas` como quiser em seu código
  Cartas.forEach(carta => {
    posicao=posicao+1;
    let imgcarta= carta.raizimagens+carta.cardNumber+".jpg";
    ImagensPossiveis.push(imgcarta);
    const ImagensPossiveis2=ImagensPossiveis;
    console.log(ImagensPossiveis);
    console.log(ImagensPossiveis2);
    const quantidadeCartas = Math.floor(Math.random() * 10) + 1;
    const deckContainer = document.getElementById("decktop");
    const deckContainer2 = document.getElementById("deckbottom");
    deckContainer.setAttribute("draggable","true");
    deckContainer2.setAttribute("draggable","true");
    console.log(ImagensPossiveis);
  // Criar o contêiner da carta
      const cartaDiv = document.createElement("div");
      cartaDiv.setAttribute("draggable", "true")
      cartaDiv.classList.add("carta");
      cartaDiv.id = "ct"+posicao;
      cartaDiv.style.backgroundImage = "url("+imgcarta+")";
      cartaDiv.style.backgroundSize = 'cover';
      cartaDiv.style.backgroundRepeat = 'no-repeat';
      cartaDiv.style.backgroundPosition = 'center';
      // Adicionar a carta ao contêiner principal
      deckContainer.appendChild(cartaDiv);
      cartaDiv.addEventListener("dragstart", cartaarrastada);
      //exibindo apenas para checagem as cartas que sobraram no baralho que esta embaralhado sobre a mesa
      const cartasdeck = document.getElementById("nctop");
      cartasdeck.innerText=ImagensPossiveis.length;
  });
}).catch(error => {
  console.error("Erro ao carregar o CSV:", error);
});
});