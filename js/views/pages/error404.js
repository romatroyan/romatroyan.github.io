import Component from '../component.js';

class Error404 extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
                            
                <h1 class="page-title">404 Ошибка - Страница не найдена</h1>              
            `);
        });
    }
}

export default Error404;