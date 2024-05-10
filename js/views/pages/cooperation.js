import Component from '../component.js';
import { slider } from '../../helpers/slider.js';

class Cooperation extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
            <div class="wrapper-сooperation">
    <div class="title-сooperation">
        <h1>
            Супрацоўніцтва
        </h1>
    </div>
    <div class="swiper">
    
        <div class="swiper-wrapper">
        
            <div class="swiper-slide">
                <img src="../../../img/achieving/Музей, Заостр (2)/Слайд1.JPG" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/achieving/Музей, Заостр (2)/Слайд2.JPG" alt="">

            </div>
            <div class="swiper-slide">
                <img src="../../../img/achieving/Музей, Заостр (2)/Слайд3.JPG" alt="">
                
        </div>
         
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    
        </div>
</div>           
                         
            `);
        });
    }
    afterRender() {
        slider();
    }
}

export default Cooperation;