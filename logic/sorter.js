//Aqui fica a logica de sorteamento do jogo da memoria
class Sorter {

    //A regra do jogo e simples, trabalharemos apenas com o RGB
    //Ou seja, 1 - red, 2 - green, 3 - blue e cada novo sorteamento sera feito de forma aleatoria
    //Em seguida, ele sera armazenado em um array e retornado para o jogo da memoria
    constructor() {
        this._colors = [];
        Object.freeze(this._colors);
    }
    
    getFirstColors() {
        return this._colors;
    }
    
    setFirstColors(){
        if (this._colors.length != 3) {
            while(this._colors.length < 3) {
                this._colors.push(Math.floor(Math.random() * 3) + 1);
            }
        }
    }

    sortColors() {
        //Preenchendo o array na primeira vez, caso o array seja menor que 3, ele sera preenchido com cores aleatorias
        let newColor = Math.floor(Math.random() * 3) + 1;
        this._colors.push(newColor);
        return this._colors;
    }

    printColors() {
        this._colors.forEach((color) => {
            let colorName = '';
            switch(color) {
                case 1:
                    colorName = 'Red';
                    break;
                case 2:
                    colorName = 'Green';
                    break;
                case 3:
                    colorName = 'Blue';
                    break;
                default:
                    colorName = 'Unknown';
            }
        });
        console.log(`Cores sorteadas: ${this._colors.map(color => colorName).join(', ')}`);
        console.log(`Memorize as cores sorteadas, voce tem 5 segundos para memorizar!`);
        console.clear();
    }

    
}

export default Sorter;