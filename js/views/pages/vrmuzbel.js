import Component from '../component.js';

class Vrmuzbel extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
                            
                    <div class="wrapper-vrmuzbel">
            <div class="title-vrmuzbel">
                <h1>Віртуальны тур па музеях Беларусі</h1>
            </div>
            <div class="inner-vrmuzbel">
                <div class="subtitle-vrmuzbel">
                    <div class="title-text">
                        <h3>
                            7 самых незвычайных музеяў Беларусі
                        </h3>
                    </div>
                    <div class="icon"><a href="../../../document/7 самых необычных музеев Беларуси.docx"><img src="../../../img/icon/ms-word-icon-2048x2026-3u3jf850.png" alt=""></a></div>
                </div>
                <div class="subtitle-vrmuzbel">
                    <div class="title-text">
                        <h3>  
                            10 музеяў Беларусі, куды можна адправіцца на экскурсію
                        </h3>
                    </div>
                    <div class="icon"><a href="../../../document/10 музеев Беларуси куда можно отправиться на экскурсию.docx"><img src="../../../img/icon/ms-word-icon-2048x2026-3u3jf850.png" alt=""></a></div>
                </div>
                </div>
            </div>
        </div>  
            `);
        });
    }
}

export default Vrmuzbel;