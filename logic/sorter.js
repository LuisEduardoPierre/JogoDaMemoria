//Aqui fica a logica de sorteamento do jogo da memoria
class Sorter {

    //A regra do jogo e simples, trabalharemos apenas com o RGB
    //Ou seja, 1 - red, 2 - green, 3 - blue e cada novo sorteamento sera feito de forma aleatoria
    //Em seguida, ele sera armazenado em um array e retornado para o jogo da memoria
    constructor() {
        this._colors = [];
        Object.freeze(this._colors);
    }

    sortColors(colors) {

        //Preenchendo o array na primeira vez, caso o array seja menor que 3, ele sera preenchido com cores aleatorias
        if (colors.length !== 3) {
            while(this._colors.length < 3) {
                this._colors = Math.floor(Math.random() * 3) + 1;
            }
        }
        
    }
}
