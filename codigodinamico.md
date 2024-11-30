# Gerar Cartas com IDs e Imagens Aleatórias em JavaScript

##### Este guia descreve como criar dinamicamente cartas em HTML, atribuindo a cada carta um ID único e escolhendo imagens aleatórias a partir de um array de opções.
<hr>

1. Configurar o Array de Imagens: 
Crie um array contendo os caminhos das imagens que podem ser usadas para representar as cartas.

~~~javascript
 /* aqui basicamente teremos todas
  as cartas(imagens) do Baralho */
 const imagensPossiveis = [
    "./img/deck-xmen/fenixnegra.jpg",
    "./img/deck-xmen/cerebro.jpg",
    "./img/deck-xmen/acarga.jpg",
    "./img/deck-xmen/hardwareavancado.jpg",
    "./img/deck-xmen/jeangreyv2.jpg",
    "./img/deck-xmen/escolaxavier.jpg",
    "./img/deck-xmen/ataquesurpresa.jpg",
    "./img/deck-xmen/armadurakevlar.jpg",];
~~~
2. Selecionar o Contêiner Principal

Certifique-se de que o HTML tenha um elemento contêiner para onde as cartas serão adicionadas.
~~~html
<div id="deck-container"></div>
~~~

No JavaScript, selecionamos esta div e relacionamos com uma constante:

~~~javascript
const deckContainer = document.getElementById("deck-container");
~~~

3. Criar Função para Embaralhar o Array(baralho):Implemente uma função para embaralhar os elementos do array de imagens.

~~~javascript
function embaralharArray(array) {
    return array.sort(() => Math.random() - 0.5);
}
~~~
4. Definir a Quantidade de Cartas: Determine o número de cartas que deseja exibir:

~~~javascript
const quantidadeCartas = 8;
~~~
Selecione as imagens aleatoriamente:

~~~javascript
const imagensSelecionadas = embaralharArray([...imagensPossiveis]).slice(0, quantidadeCartas);
~~~
Detalhe do SLICE.
* embaralharArray([...imagensPossiveis]),  Cria uma cópia do array original (imagensPossiveis) com elementos embaralhados.
* .slice(0, quantidadeCartas): Extrai os primeiros quantidadeCartas elementos do array embaralhado. Formando um novo array chamado imagensSelecionadas.

5. Criar as Cartas Dinamicamente: Use um laço para criar as cartas, atribuir IDs únicos e adicionar as imagens:
~~~javascript
imagensSelecionadas.forEach((imagem, index) => {
    // Criar o contêiner da carta
    const cartaDiv = document.createElement("div");
    cartaDiv.classList.add("carta");
    cartaDiv.id = `c${index + 1}`; // Define ID único (c1, c2, etc.)

    // Criar a imagem
    const img = document.createElement("img");
    img.src = imagem; // Define o caminho da imagem
    img.alt = `Carta ${index + 1}`; // Adiciona descrição alternativa
    img.classList.add("carta-img"); // Define a classe CSS

    // Adicionar a imagem ao contêiner da carta
    cartaDiv.appendChild(img);

    // Adicionar a carta ao contêiner principal
    deckContainer.appendChild(cartaDiv);
});
~~~

6. Resultado Esperado

Ao executar este código:

O contêiner principal (deck-container) receberá 8 cartas.

Cada carta terá um ID único (ex.: c1, c2, etc.).

As imagens das cartas serão selecionadas aleatoriamente a partir do array imagensPossiveis.

