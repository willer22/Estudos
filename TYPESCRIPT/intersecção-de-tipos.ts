//A intersecção de tipos como o próprio nome já diz, podemos unir dois tipos e usar 
//as suas propriedades dentro de um objeto.

//Segue o exemplo abaixo:

type Users = {
    id: number,
    name: string,
}

type Char = {
    nickname: string,
    level: number
}

type PlayerInfo = User & Char;

