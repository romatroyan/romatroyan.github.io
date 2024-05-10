import Component from '../component.js';

class Class extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
            <div class="wrapper-class">
            <div class="title-class">
                <h1>Музейныя заняткі</h1>
            </div>
            <div class="inner-class">
                <div class="title-load">
                    <div class="title-text">
                        <h3>
                            Беларуская хатка
                        </h3>
                    </div>
                    <div class="icon"><a href="../../../document/Беларуская хатка.docx"><img src="../../../img/icon/ms-word-icon-2048x2026-3u3jf850.png" alt=""></a></div>
                </div>
                <div class="title-load">
                    <div class="title-text">
                        <h3>
                            Размаўляючыя прадметы
                        </h3>
                    </div>
                    <div class="icon"><a href="../../../document/Размаўляючыя прадметы.docx"><img src="../../../img/icon/ms-word-icon-2048x2026-3u3jf850.png" alt=""></a></div>
                </div>
                <div class="title-load">
                    <div class="title-text">
                        <h3>
                            Як жылі нашы прабабулі
                        </h3>
                    </div>
                    <div class="icon"><a href="../../../document/Як жыли нашы прабабули.docx"><img src="../../../img/icon/ms-word-icon-2048x2026-3u3jf850.png" alt=""></a></div>
                </div>
            </div>
        </div>           
                          
            `);
        });
    }
}

export default Class;