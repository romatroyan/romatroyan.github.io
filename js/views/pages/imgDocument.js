import Component from '../component.js';

class ImgDocument extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
            <div class="wrapper-document">
            <div class="document-title">
                <h1>Узоры дакументаў</h1>
            </div>
            <div class="document-link">
                <ol type="1">
                    <li><a download href="../../../document/Пашпарт музея ўстановы адукацыи (2).docx"  target="_blank">Пашпарт музея ўстановы адукацыі</a></li>
                    <li><a  download href="../../../document/Пратакол заключэння ўпаўнаважанай камиси (2).docx"  target="_blank">Пратакол заключэння ўпаўнаважанай камісіі</a></li>
                    <li><a download href="../../../document/Форма акта прыёму перадачы музейнага фон (1).docx"  target="_blank">Форма акта прыёму перадачы музейнага фонду</a></li>
                    <li><a download href="../../../document/Форма акту агляду музейных прадметаў и н.docx"  target="_blank">Форма акту агляду музейных прадметаў і навукова-дапаможных фондаў</a></li>
                    <li><a download href="../../../document/форма заявы аб выключэнни музейных прадм.docx"  target="_blank">Форма заявы аб выключэнні музейных прадметаў з Музейнага фонду Рэспублікі Беларусь</a></li>
                    <li><a download href="../../../document/форма прадстаўлення инфармацыи аб музеях.docx"  target="_blank">Форма прадстаўлення інфармацыі аб музеях</a></li>
                </ol>
            </div>
        </div>
            `);
        });
    }
}

export default ImgDocument;