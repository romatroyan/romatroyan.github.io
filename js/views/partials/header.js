import Component from '../component.js';

class Header extends Component {
    render() {
        const resource = this.request.resource;

        return new Promise(resolve => {
            resolve(`
            <header class="header">                    
            <div class="header__link ${resource === '' ? 'active' : ''}">
                <a  href="/#/">
                    ГАЛОЎНАЯ
                </a>
            </div>
            <div class="header__link">
                <div class="dropdown">
                    <div class="dropbtn">АБ МУЗЕІ</div>
                        <div class="dropdown-content">
                            <a href="/#/card">Візітная картка</a>
                        </div>
                </div>
            </div>
            <div class="header__link">
                <div class="dropdown">
                    <div class="dropbtn">Нарматыўныя дакументы</div>
                        <div class="dropdown-content">
                            <a href="/#/document">Дакументацыя</a>
                            <a href="/#/imgDocumen">Узоры дакументаў</a>
                        </div>
                </div>
           </div>
            <div class="header__link">
                <div class="dropdown">
                    <div class="dropbtn">Карысныя спасылкі</div>
                        <div class="dropdown-content">
                            <a href="/#/material">Матэрыялы для цікаўных</a>
                            <a href="/#/vrmuzbel">Віртуальны тур па музеях Беларусі</a>
                        </div>
                </div>
           </div>
            <div class="header__link">
                <div class="dropdown">
                    <div class="dropbtn">Навукова-асветніцкая дзейнасць</div>
                        <div class="dropdown-content">
                            <a href="/#/materialwork">Матэрыялы даследчых работ</a>
                            <a href="/#/achieving">Дасягненні і ўзнагароды</a>
                            <a href="/#/cooperation">Супрацоўніцтва</a>
                        </div>
                </div>
           </div>
           <div class="header__link">
                <div class="dropdown">
                <div class="dropbtn">СКАРБОНКА МУЗЕЙНЫХ СПРАЎ</div>
                    <div class="dropdown-content">
                        <a href="/#/video">Відэаэкскурсіі</a>
                        <a href="/#/class">Музейныя заняткі</a>
                        <a href="/#/ecscurs">Аглядныя і тэматычныя экскурсіі</a>
                        <a href="/#/suitcase">Музей ў чамадане</a>
                        <a href="/#/game">Інтэрактыўныя заданні</a>
                    </div>
                </div>
            </div>
            <div class="header__link ${resource === 'vr' ? 'active' : ''}">
                <a  href="/#/vr">
                    ВІРТУАЛЬНАЯ ЭКСКУРСІЯ
                </a> 
            </div>
            <div class="header__link ${resource === 'direction' ? 'active' : ''}">
                <a  href="/#/direction">
                НАКІРУНКІ ДЗЕЙНАСТІ
                </a> 
            </div>
            <div class="header__link ${resource === 'histori' ? 'active' : ''}">
                <a  href="/#/histori">
                ГІСТАРЫЧНЫ ЭКСКУРС
                </a> 
            </div>
           <div class="header__link ${resource === 'contact' ? 'active' : ''}">
                <a  href="/#/contact">
                КАНТАКТЫ
            </a>    
            </div>                                      
        </header>
            `);
        });
    }
}

export default Header;