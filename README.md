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
Se acessarmos apenas https://img.ccgdb.com/vs/cards/24/ , temos acesso a todas as imagens do set Marvel Universe que são 330. veja o exemplo abaixo preenchido

~~~json
{
  "cardName": "Venom, Brain-Eater",
  "cardNumber":"MUN-072",
  "raizimagens":"https://img.ccgdb.com/vs/cards/24/",
  "type": "Character",
  "team": "Thunderbolts",
  "cost": 7,
  "attack": 17,
  "defense": 14,
  "keywords": ["Flight", "Range"],
  "abilities": [
    {
      "description": "ative, nocautei(KO) o personagem alvo que está Stunned."
    }
  ],
  "flavorText": "Saia da frente, eu estou jogando."

}
~~~

Iremos cadastrar cada carta a ser usada em um planilha .CSV. 

~~~csv
cardName,type,team,cost,attack,defense,health,keywords,abilities,flavorText,set,rarity,quantity
Homem de Ferro,Character,Avengers,4,6,5,1,"Flight;Range","Tecnologia Avançada: No início do seu turno, você pode olhar as três cartas do topo do seu deck e reorganizá-las.","Eu sou o Homem de Ferro.","Marvel Origins",Rare,4
Capitão América,Character,Avengers,3,4,4,1,Leader,"Inspirar Coragem: Todos os seus personagens ganham +1 de ataque enquanto Capitão América estiver em campo.","Eu posso fazer isso o dia todo.","Marvel Origins",Rare,4
Plot Twist - Emboscada,Plot Twist,,2,,,,,"","Dê +3 de ataque a um personagem que você controla neste turno.","Sempre tenha um plano reserva.","Marvel Origins",Common,4
~~~
