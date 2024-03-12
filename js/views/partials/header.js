import Component from '../component.js';

class Header extends Component {
    render() {
        const resource = this.request.resource;

        return new Promise(resolve => {
            resolve(`
                 <header class="header">                    
                     <a class="header__link ${resource === '' ? 'active' : ''}" href="/#/">
                         ГАЛОЎНАЯ
                     </a>
                     <a class="header__link ${resource === 'about_museum' ? 'active' : ''}" href="/#/about_museum">
                         АБ МУЗЕІ 
                     </a>  
                     <a class="header__link ${resource === 'history_and_achievements' ? 'active' : ''}" href="/#/history_and_achievements">
                        ГІСТОРЫЯ І ДАСЯГНЕННІ
                    </a>
                    <a class="header__link ${resource === 'exposition' ? 'active' : ''}" href="/#/exposition">
                        ЭКСПАЗІЦЫІ
                    </a>
                    <a class="header__link ${resource === 'vr' ? 'active' : ''}" href="/#/vr">
                        ВІРТУАЛЬНАЯ ЭКСКУРСІЯ
                    </a> 
                    <a class="header__link ${resource === 'contact' ? 'active' : ''}" href="/#/contact">
                        КАНТАКТЫ
                    </a>                                          
                </header>
            `);
        });
    }
}

export default Header;