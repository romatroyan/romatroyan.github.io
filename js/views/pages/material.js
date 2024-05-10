import Component from '../component.js';

class Material extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
            <div class="wrapper-material">
            <div class="title-material">
                <h1>Матэрыялы для цікаўных</h1>
            </div>
            <div class="inner-material">
                <div class="subtitle-material">
                    <div class="title-text">
                        <h3>
                            З гісторыі беларускага ручніка
                        </h3>
                    </div>
                    <div class="icon"><a href="../../../document/З гисторыи беларускага ручника.docx"><img src="../../../img/icon/ms-word-icon-2048x2026-3u3jf850.png" alt=""></a></div>
                </div>
                <div class="subtitle-material">
                    <div class="title-text">
                        <h3>
                            Па слядах гісторыі. Якое адзенне было ў нашых продкаў
                        </h3>
                    </div>
                    <div class="icon"><a href="../../../document/Па слядах гисторыи. Якое адзенне было ў нашых продкаў.docx"><img src="../../../img/icon/ms-word-icon-2048x2026-3u3jf850.png" alt=""></a></div>
                </div>
                <div class="subtitle-material">
                    <div class="title-text">
                        <h3>
                            Простая ежа беларусаў
                        </h3>
                    </div>
                    <div class="icon"><a href="../../../document/Простая ежа беларусаў.docx"><img src="../../../img/icon/ms-word-icon-2048x2026-3u3jf850.png" alt=""></a></div>
                </div>
                <div class="subtitle-material">
                    <div class="title-text">
                        <h3>
                            Таямніца беларускага арнаменту
                        </h3>
                    </div>
                    <div class="icon"><a href="../../../document/Таямницы беларускага арнаменту.docx"><img src="../../../img/icon/ms-word-icon-2048x2026-3u3jf850.png" alt=""></a></div>
                </div>
                <div class="subtitle-material">
                    <div class="title-text">
                        <h3>
                            Разнастайнасць беларускага арнаменту і яго значэнне
                        </h3>
                    </div>
                    <div class="icon"><a href="../../../document/Разнастайнасць беларускага арнамента и яго значэнне.pdf"><img src="../../../img/icon/ms-word-icon-2048x2026-3u3jf850.png" alt=""></a></div>
                </div>
            </div>
        </div>              
                
            `);
        });
    }
}

export default Material;