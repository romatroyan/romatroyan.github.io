import Component from '../component.js';
import { slider } from '../../helpers/slider.js';

class Home extends Component {

   
    render() {
        return new Promise(resolve => {
            resolve(`
            <div class="header-home">
            <div class="header-title">
                    <div class="header-headline">
                       <h1 class="custom-color"> МУЗЕЙ БЕЛАРУСКАГА РУЧНІКА ДЗЯРЖАЎНАЙ УСТАНОВЫ АДУКАЦЫІ “ЛАЗАВІЦКАЯ СЯРЭДНЯЯ ШКОЛА  КЛЕЦКАГА РАЁНА”
                       </h1>
                    </div>
                    <div class="header-text">
                        <h3 class="custom-color">Паважаныя, сябры! Калі хто з вас хоча навучыцца прасці, ткаць і вышываць зусім задарма, звяртайцеся ў Лазавіцкую сярэднюю школу. Вас запрашае Музей беларускага ручніка.</h3>
                    </div>
                    <div class="header-underText">
                        <p>Школьны – гэта лад жыцця,<br>
                            Краязнаўчы – значыць частка краіны.<br>
                            Музей – захавальнік вобраза Айчыны...<br>
                            Памятаць мінулае трэба здаўна.</p>
                        <p>У нашым музеі: прас і ручнік,<br>
                            Старадаўнія кросны драўляныя…<br>
                            Ці можна любіць свой край,<br>
                            Не ведаючы гісторыю краю?</p>
                    </div>
            </div>

            <div class="swiper">
    
                <div class="swiper-wrapper">
                
                    <div class="swiper-slide">
                        <img src="../../../img/sliderHome/1.jpg" alt="">

                    </div> 
                    <div class="swiper-slide">
                        <img src="../../../img/sliderHome/2.jpg" alt="">

                    </div>
                    <div class="swiper-slide">
                        <img src="../../../img/sliderHome/3.jpg" alt="">
                        
                </div>
                <div class="swiper-slide">
                        <img src="../../../img/sliderHome/4.jpg" alt="">
                        
                </div>
                <div class="swiper-slide">
                        <img src="../../../img/sliderHome/5.jpg" alt="">
                        
                </div>
                <div class="swiper-slide">
                        <img src="../../../img/sliderHome/6.jpg" alt="">
                        
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
    


export default Home;