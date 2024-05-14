import Component from '../component.js';

class Mapkleck extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
                            
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9fbc037b4d18604b6ed699d6ff57e071664de77d7d28ecd8ff922e450aaa33ef&amp;source=constructor" width="1140" height="650" frameborder="0"></iframe>   
            `);
        });
    }
}

export default Mapkleck;