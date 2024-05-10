import Component from '../component.js';

class Metod extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
            <div class="wrapper-material">
                <div class="title-material">
                    <h1>Метадычныя распрацоўкі</h1>
                </div>
                <div class="inner-material">
                    <div class="subtitle-material">
                        <div class="title-text">
                            <h3>
                                Метадычная распрацоўка інтэрактыўнай экскурсіі на тэму “Музейныя агледзіны”           
                            </h3>
                        </div>
                        <div class="icon"><a href="../../../document/metod/Метадычная распрацоўка экскурсии Музейныя агледзины.docx"><img src="../../../img/icon/ms-word-icon-2048x2026-3u3jf850.png" alt=""></a></div>
                    </div>
                    <div class="subtitle-material">
                        <div class="title-text">
                            <h3>
                                Метадычная распрацоўка інтэрактыўнай музейнай гульні на тэму “Загадкі з музейных паліц”                                                           

                            </h3>
                        </div>
                        <div class="icon"><a href="../../../document/metod/Метадычная распрацоўка музейнай гульни.docx"><img src="../../../img/icon/ms-word-icon-2048x2026-3u3jf850.png" alt=""></a></div>
                    </div>
                    
                </div>
            </div>
                
            `);
        });
    }
}

export default Metod;