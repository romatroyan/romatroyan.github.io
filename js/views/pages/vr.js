import Component from '../component.js';

class Vr extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
            
            <div class="header-contact__button">
            <button class="button"><a href="../../../vr/Vrmuseum.html">Пачать экскурс</a></button>
            </div>
            `);
        });
    }
}

export default Vr;