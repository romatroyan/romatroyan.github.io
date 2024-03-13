import Component from '../component.js';


class Home extends Component {

   
    render() {
        return new Promise(resolve => {
            resolve(`
            <div class="container-slider">
            <div class="slider">
                <div><img src="../../../img/sliderHome/1.jpg" alt=""></div>
                <div><img src="../../../img/sliderHome/2.jpg" alt=""></div>
                <div><img src="../../../img/sliderHome/3.jpg" alt=""></div>
            </div>
            </div>
            `);
        });
    }

    slider(){
        $('.slider').slick({
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
       };

    afterRender() {
        this.slider();
    }

    
    
}
    


export default Home;