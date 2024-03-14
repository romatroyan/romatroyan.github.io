import Component from '../component.js';

class Game extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
            <div class="wrapper-game">
            <div class="title-game">
                <h1>Інтэрактыўныя заданні</h1>
            </div>
            <div class="subtitle-game">
                <div class="title-text">
                    <h3>
                        Квіз
                    </h3>
                </div>
                <div class="icon"><a href="../../../game/quiz/index.html"><img src="../../../img/icon/free-icon-computer-game-720718.png" alt=""></a></div>
            </div>
           
        </div>              
                           
            `);
        });
    }
}

export default Game;