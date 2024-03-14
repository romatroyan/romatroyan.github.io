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
           <div class="header__link ${resource === 'exposition' ? 'active' : ''}">
                <a  href="/#/exposition">
                    ЭКСПАЗІЦЫІ
                </a>
            </div>
            <div class="header__link ${resource === 'vr' ? 'active' : ''}">
                <a  href="/#/vr">
                    ВІРТУАЛЬНАЯ ЭКСКУРСІЯ
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