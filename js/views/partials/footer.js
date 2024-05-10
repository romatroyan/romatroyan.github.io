import Component from '../component.js';

class Footer extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
                <footer class="footer">                   
                    <p class="footer__info">
                        &copy; Дзяржаўная ўстанова адукацыі “Лазавіцкая сярэдняя школа Клецкага раёна”, 2024
                    </p>                  
                </footer>
            `);
        });
    }
}

export default Footer;