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
                            <img src="../../../img/vr/prot.jpg" alt="">
                
                        </div> 
                        <div class="swiper-slide">
                            <img src="../../../img/vr/prot.jpg" alt="">
                
                        </div>                     
                      
                        <div class="swiper-slide">
                            <img src="../../../img/vr/prot.jpg" alt="">
                
                        </div> 
                        <div class="swiper-slide">
                            <img src="../../../img/vr/prot.jpg" alt="">
                
                        </div>                     
                      
                    </div>
                    </div>
                <div class="swiper">
                    
                    <div class="swiper-wrapper">
                    
                        <div class="swiper-slide">
                            <img src="../../../img/vr/21.jpg" alt="">
                
                        </div> 
                        <div class="swiper-slide">
                            <img src="../../../img/vr/22.jpg" alt="">
                
                        </div>                 
                        
                        <div class="swiper-slide">
                            <img src="../../../img/vr/23.jpg" alt="">
                
                        </div>                 
                        <div class="swiper-slide">
                            <img src="../../../img/vr/24.jpg" alt="">
                
                        </div>                 
                                        
                        <div class="swiper-slide">
                            <img src="../../../img/vr/25.jpg" alt="">
                
                        </div>                 
                        <div class="swiper-slide">
                            <img src="../../../img/vr/26.jpg" alt="">
                
                        </div>                 
                        <div class="swiper-slide">
                            <img src="../../../img/vr/27.jpg" alt="">
                
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