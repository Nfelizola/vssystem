# VSSYSTEM
<hr>
<hr>
## Projeto para cartas do jogo vs system

No cado de Index, Index1 até Index3.html usamos o exemplo apenas com o nome das imagens para representar as cartas.

Sabendo que existem várias cartas na coleção, iremos usar uma estrutura JSON para representar cada carta e iremos
utilizar imagens do site https://www.ccgdb.com/vs/ , iremos fazer um Fetch para uma planilha que iremos organizar.
Abaixo vemos como estão cadastradas as cartas no site ccgdb.com:
![image](https://github.com/user-attachments/assets/3e0a0181-9667-48a6-8f31-262f994ae712)

ela está armazenada em https://img.ccgdb.com/vs/cards/24/MUN-072.jpg
Se acessarmos apenas https://img.ccgdb.com/vs/cards/24/ , temos acesso a todas as imagens do set Marvel Universe que são 330.

{
  "cardName": "Homem de Ferro",
  "type": "Character",
  "team": "Avengers",
  "cost": 4,
  "attack": 6,
  "defense": 5,
  "health": 1,
  "keywords": ["Flight", "Range"],
  "abilities": [
    {
      "name": "Tecnologia Avançada",
      "description": "No início do seu turno, você pode olhar as três cartas do topo do seu deck e reorganizá-las."
    }
  ],
  "flavorText": "Eu sou o Homem de Ferro.",
  "art": "URL ou caminho para a imagem",
  "set": "Marvel Origins",
  "rarity": "Rare"
}

