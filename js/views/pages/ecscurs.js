import Component from '../component.js';

class Ecscurs extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
            <div class="wrapper-class">
            <div class="title-class">
                <h1>Аглядныя і тэматычныя экскурсіі</h1>
            </div>
            <div class="inner-ecscurs">
                <div class="title-load">
                    <div class="title-text">
                        <h3>
                        Традыцыйнае беларускае адзенне
                        </h3>
                    </div>
                    <div class="icon"><a href="../../../document/Традыцыйнае беларускае адзенне.docx"><img src="../../../img/icon/ms-word-icon-2048x2026-3u3jf850.png" alt=""></a></div>
                </div>
                <div class="title-load">
                    <div class="title-text">
                        <h3>
                        Апрацоўка лёну і ткацтва
                        </h3>
                    </div>
                    <div class="icon"><a href="../../../document/Апрацоўка лёну и ткацтва.docx"><img src="../../../img/icon/ms-word-icon-2048x2026-3u3jf850.png" alt=""></a></div>
                </div>
                <div class="title-load">
                    <div class="title-text">
                        <h3>
                         Посуд нашых продкаў
                        </h3>
                    </div>
                    <div class="icon"><a href="../../../document/Посуд нашых продкаў.docx"><img src="../../../img/icon/ms-word-icon-2048x2026-3u3jf850.png" alt=""></a></div>
                </div>
                <div class="title-load">
                    <div class="title-text">
                        <h3>
                        Хатка гаспадара
                        </h3>
                    </div>
                    <div class="icon"><a href="../../../document/Экскурсия Хатка гаспадара.docx"><img src="../../../img/icon/ms-word-icon-2048x2026-3u3jf850.png" alt=""></a></div>
                </div>
            </div>
        </div>   
                          
            `);
        });
    }
}

export default Ecscurs;