import Component from '../component.js';
import { sliderVr } from '../../helpers/sliderVr.js';
class Vr extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
            <div class="wrapper-vr">
                <div class="title-vr">
                    <h1>Віртуальная экскурсія</h1>
                </div>
                <div class="swiper">
                    
                    <div class="swiper-wrapper">
                    
                        <div class="swiper-slide">
                            <img src="../../../img/vr/1.jpg" alt="">
                
                        </div> 
                        <div class="swiper-slide">
                            <img src="../../../img/vr/2.jpg" alt="">
                
                        </div>                 
                        <div class="swiper-slide">
                            <img src="../../../img/vr/1.jpg" alt="">
                
                        </div> 
                        <div class="swiper-slide">
                            <img src="../../../img/vr/2.jpg" alt="">
                
                        </div>                 
                      
                    </div>
                    </div>
                <div class="swiper">
                    
                    <div class="swiper-wrapper">
                    
                        <div class="swiper-slide">
                            <img src="../../../img/vr/11.jpg" alt="">
                
                        </div> 
                        <div class="swiper-slide">
                            <img src="../../../img/vr/12.jpg" alt="">
                
                        </div>                 
                        <div class="swiper-slide">
                            <img src="../../../img/vr/13.jpg" alt="">
                
                        </div> 
                        <div class="swiper-slide">
                            <img src="../../../img/vr/14.jpg" alt="">
                
                        </div>                 
                        <div class="swiper-slide">
                            <img src="../../../img/vr/15.jpg" alt="">
                
                        </div>                 
                        <div class="swiper-slide">
                            <img src="../../../img/vr/16.jpg" alt="">
                
                        </div>                 
                        <div class="swiper-slide">
                            <img src="../../../img/vr/17.jpg" alt="">
                
                        </div>                 
                        <div class="swiper-slide">
                            <img src="../../../img/vr/18.jpg" alt="">
                
                        </div>                 
                        <div class="swiper-slide">
                            <img src="../../../img/vr/19.jpg" alt="">
                
                        </div>                 
                      
                    </div>
                    </div>
            </div>
            
            `);
        });
    }
    afterRender(){
        sliderVr();
    }
}

export default Vr;