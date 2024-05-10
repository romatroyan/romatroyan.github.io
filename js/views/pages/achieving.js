import Component from '../component.js';
import { slider } from '../../helpers/slider.js';

class Achieving extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
            <div class="wrapper-achieving">
            <div class="title-achieving">
                <h1>
                Дасягненні і ўзнагароды
                </h1>
            </div>
            <div class="swiper">
            
                <div class="swiper-wrapper">
                
                    <div class="swiper-slide">
                        <img src="../../../img/achieving/Музей, Заостр (1)/Слайд1.JPG" alt="">
        
                    </div> 
                    <div class="swiper-slide">
                        <img src="../../../img/achieving/Музей, Заостр (1)/Слайд2.JPG" alt="">
        
                    </div>
                    <div class="swiper-slide">
                        <img src="../../../img/achieving/Музей, Заостр (1)/Слайд3.JPG" alt="">
                        
                </div>
                <div class="swiper-slide">
                        <img src="../../../img/achieving/Музей, Заостр (1)/Слайд4.JPG" alt="">
                        
                </div>
                <div class="swiper-slide">
                        <img src="../../../img/achieving/Музей, Заостр (1)/Слайд5.JPG" alt="">
                        
                </div>
                <div class="swiper-slide">
                        <img src="../../../img/achieving/Музей, Заостр (1)/Слайд6.JPG" alt="">
                        
                </div>
                <div class="swiper-slide">
                        <img src="../../../img/achieving/Музей, Заостр (1)/Слайд7.JPG" alt="">
                        
                </div>
                <div class="swiper-slide">
                        <img src="../../../img/achieving/Музей, Заостр (1)/Слайд8.JPG" alt="">
                        
                </div>
                <div class="swiper-slide">
                        <img src="../../../img/achieving/Музей, Заостр (1)/Слайд9.JPG" alt="">
                        
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

export default Achieving;