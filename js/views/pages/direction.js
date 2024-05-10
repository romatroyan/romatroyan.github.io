import Component from '../component.js';
import { slider } from '../../helpers/slider.js';
class Direction extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
            <div class="wrapper-сooperation">
    
    <div class="title-сooperation title-img">
        <img src="../../../img/direction/Музей, Заостр (2).jpg" alt="">
                
    </div>
    <div class="text-сooperation text-img">
        <img src="../../../img/direction/1.jpg" alt="">
    </div>
    
    <div class="text-сooperation text-img">
        <img src="../../../img/direction/2.jpg" alt="">
    </div>
    <div class="swiper">
                
        <div class="swiper-wrapper">
        
            <div class="swiper-slide">
                <img src="../../../img/direction/posh/Рисунок11.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/posh/Рисунок12.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/posh/Рисунок13.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/posh/Рисунок14.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/posh/Рисунок16.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/posh/Рисунок17.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/posh/Рисунок18.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/posh/Рисунок19.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/posh/Рисунок20.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/posh/Рисунок21.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/posh/Рисунок22.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/posh/Рисунок23.jpg" alt="">

            </div> 
           
            
            
        
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    
        </div>
    <div class="text-сooperation text-img">
    <img src="../../../img/direction/3.jpg" alt="">
    </div>
    <div class="swiper">
                
        <div class="swiper-wrapper">
        
            <div class="swiper-slide">
                <img src="../../../img/direction/work/Рисунок24.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/work/Рисунок25.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/work/Рисунок26.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/work/Рисунок27.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/work/Рисунок28.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/work/Рисунок29.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/work/Рисунок30.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/work/Рисунок31.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/work/Рисунок32.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/work/Рисунок33.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/work/Рисунок34.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/work/Рисунок35.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/work/Рисунок36.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/work/Рисунок37.jpg" alt="">

            </div> 
           
            
            
        
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    
        </div>
    <div class="text-сooperation text-img">
    <img src="../../../img/direction/4.jpg" alt="">

    </div>
    <div class="swiper">
                
        <div class="swiper-wrapper">
        
            <div class="swiper-slide">
                <img src="../../../img/direction/cult/Рисунок38.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/cult/Рисунок39.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/cult/Рисунок40.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/cult/Рисунок41.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/cult/Рисунок42.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/cult/Рисунок43.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/cult/Рисунок44.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/cult/Рисунок45.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/cult/Рисунок46.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/direction/cult/Рисунок47.jpg" alt="">

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

export default Direction;