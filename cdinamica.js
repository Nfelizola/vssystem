/* aqui basicamente teremos todas
  as cartas(imagens) do Baralho */
const quantidadeCartas = Math.floor(Math.random() * 10) + 1;
const imagensPossiveis = [
    "./img/deck-xmen/acarga.jpg",
    "./img/deck-xmen/arcanjo.jpg",
    "./img/deck-xmen/armadurakevlar.jpg",
    "./img/deck-xmen/ataquesurpresa.jpg",
    "./img/deck-xmen/atencaomedica.jpg",
    "./img/deck-xmen/banshee.jpg",
    "./img/deck-xmen/campodeforcapessoal.jpg",
    "./img/deck-xmen/cerebro.jpg",
    "./img/deck-xmen/ciclope.jpg",
    "./img/deck-xmen/ciclopev2.jpg",
    "./img/deck-xmen/colossus.jpg",
    "./img/deck-xmen/corporacaox.jpg",
    "./img/deck-xmen/cristal.jpg",
    "./img/deck-xmen/desvioacrobatico.jpg",
    "./img/deck-xmen/duplaarma.jpg",
    "./img/deck-xmen/escolaxavier.jpg",
    "./img/deck-xmen/explosaofocada.jpg",
    "./img/deck-xmen/fastballspecial.jpg",
    "./img/deck-xmen/fenixnegra.jpg",
    "./img/deck-xmen/fera.jpg",
    "./img/deck-xmen/filhosdoatomo.jpg",
    "./img/deck-xmen/gambit.jpg",
    "./img/deck-xmen/golpefinal.jpg",
    "./img/deck-xmen/hardwareavancado.jpg",
    "./img/deck-xmen/homemdegelo.jpg",
    "./img/deck-xmen/institutoxavier.jpg",
    "./img/deck-xmen/jeangrey.jpg",
    "./img/deck-xmen/jeangreyv2.jpg",
    "./img/deck-xmen/lincenegra.jpg",
    "./img/deck-xmen/longshot.jpg",
    "./img/deck-xmen/melhoriatecnologica.jpg",
    "./img/deck-xmen/moiramactaggert.jpg",
    "./img/deck-xmen/noturno.jpg",
    "./img/deck-xmen/passaronegro.jpg",
    "./img/deck-xmen/pontapevoador.jpg",
    "./img/deck-xmen/professorx.jpg",
    "./img/deck-xmen/professorxv2.jpg",
    "./img/deck-xmen/psylocke.jpg",
    "./img/deck-xmen/rogue.jpg",
    "./img/deck-xmen/saladeperigo.jpg",
    "./img/deck-xmen/tempestade.jpg",
    "./img/deck-xmen/toothandclaw.jpg",
    "./img/deck-xmen/Wolverine.jpg",
];
const deckContainer = document.getElementById("decktop");
function embaralharArray(array) {
    return array.sort(() => Math.random() - 0.5);
};
const deckembaralhado = embaralharArray([...imagensPossiveis]);
const cartasmesa = deckembaralhado.splice(1, quantidadeCartas);
cartasmesa.forEach((imagem, index) => {
    // Criar o contêiner da carta
        const cartaDiv = document.createElement("div");
        cartaDiv.classList.add("carta");
        cartaDiv.id = `c${index + 1}`; // Define ID único (c1, c2, etc.)
        // Criar a imagem
        const img = document.createElement("img");
        img.src = imagem; // Define o caminho da imagem
        img.alt = `Carta ${index + 1}`; // Adiciona descrição alternativa
        img.classList.add("carta"); // Define a classe CSS
        // Adicionar a imagem ao contêiner da carta
        cartaDiv.appendChild(img);
        // Adicionar a carta ao contêiner principal
        deckContainer.appendChild(cartaDiv);
        //exibindo apenas para checagem as cartas que sobraram no baralho que esta embaralhado sobre a mesa
        console.log(deckembaralhado);    
    });
