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
Comma Separate Values(CSV).. Dados separados por vírgula.

~~~csv
cardName,cardNumber,raizimagens,type,team,cost,attack,defense,health,keywords,abilities,flavorText
"Venom, Brain-Eater",MUN-072,https://img.ccgdb.com/vs/cards/24/,Character,Thunderbolts,7,17,14,1,,"ative, nocautei(KO) o personagem alvo que está Stunned.","Saia da frente. estou jogando"
~~~

o arquivo cartas.csv pode ser editado dentro do próprio vscode e você poderá cadastrar todas as cartas, se preferir pode usar um editor de planilhas para editar mais rápido, depois e só pedir para gerar um CSV. Geralmente eu prefiro editar usando google planilhas e depois gero com facilidade o CSV.