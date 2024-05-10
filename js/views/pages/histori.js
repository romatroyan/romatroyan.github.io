import Component from '../component.js';
import { slider } from '../../helpers/slider.js';

class Histori extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
            <div class="wrapper-сooperation">
    <div class="title-сooperation">
        <h1>
            Гістарычны экскурс
        </h1>
        
    </div>
    <div class="text-сooperation">
        <p>Вынікам шматгадовай працы па грамадзянскаму і патрыятычнаму выхаванню вучняў з'яўляецца адкрыццё ў 2010 годзе музея беларускага ручніка, нязменным кіраўніком якога на працягу 10 гадоў з'яўлялася Касач Тамара Іванаўна. У стварэнні музея і папаўненні экспанатаў прымала ўдзел не адно пакаленне вучняў і іх бацькоў. Многія із іх прайшлі школу музея: у ролі экскурсаводаў, афарміцеляў, у складзе гуртка "Васілінка". Першым этапам у яго стварэнні з'яўляліся этнавандроўкі, у працэсе якіх навучэнцы сустракаліся і гутарылі з народнымі ўмельцамі. Наш музей распавядае наведвальнікам не толькі аб працэсе вырошчвання лёну і яго апрацоўцы, але і паказвае наколькі таленавіты беларускі народ, наколькі багата яго спадчына. Так як ў нашай мясцовасці пражывае шмат народных умеліц, якія займаюцца вышыўкай, ткацтвам, рукадзеллем, гэта стварае спрыяльныя ўмовы для ажыццяўлення краязнаўчай работы з навучэнцамі. 
        </p>

    </div>
    <div class="swiper">
                
        <div class="swiper-wrapper">
        
            <div class="swiper-slide">
                <img src="../../../img/histori/Рисунок1.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/histori/Рисунок7.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/histori/Рисунок2.png" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/histori/Рисунок3.jpg" alt="">

            </div> 
            <div class="swiper-slide">
                <img src="../../../img/histori/Рисунок4.jpg" alt="">

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

export default Histori;