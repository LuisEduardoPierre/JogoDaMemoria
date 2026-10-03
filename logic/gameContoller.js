import sorter from './sorter.js';
import READLINE from 'readline';

const rl = READLINE.createInterface({
    input: process.stdin,
    output: process.stdout
});

const SORTER = new sorter();
let flagError = false;
let acertos = 0;

function startGame() {
        SORTER.setFirstColors(this._colors);
        SORTER.printColors();
    }

function endGame(){
        console.log('Fim do jogo! Você errou uma questão!');
        console.log(`Você acertou ${acertos} questões!`);
        return
    }



startGame();

console.log('Bem-vindo(a) ao Jogo da Memória! Você terá 5 segundos para memorizar as cores sorteadas.\n');

console.log(`Para responder a ordem das cores responda da seguinte forma: 1 para Red, 2 para Green e 3 para Blue. Exemplo: 1,2,3\n`);
console.log(`Preparado? Vamos começar! Memorize a sequência de cores sorteadas:\n`);

rl.question('Escreva a sequencia que apareceu na tela\n> ',(respostaPlayer) => {
    respostaPlayer = respostaPlayer.split(',')
    repostaPlayer.forEach((resposta) => {
        if (resposta != SORTER.getFirstColors()[repostaPlayer.indexOf(resposta)]) {
            flagError = true;
        }else{
            acertos++;
        }
           
        rl.close()
    })
})


