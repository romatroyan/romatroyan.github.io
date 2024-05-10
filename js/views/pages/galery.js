import Component from '../component.js';
import { galery } from '../../helpers/jqueryscript.js';
class Galery extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
            <div class="wrapper-galery">
    <h1>Фотагалерэя</h1>
    <div class="pictures">
        <img src="../../../img/Новая папка (3)/0-02-05-3e3ff993ff1fbaf1a66dcdaa960111b9382575478c2cb32dc22d3b97df67e3ae_7bd29d263c66c901.jpg" width="267" height="400" alt="">
        <img src="../../../img/Новая папка (3)/0-02-0a-60d7c293aba39cacf473aa0c6f0d48b0f0d8de39d85c4081de27764651d92942_d342cbadc7dcb15e.jpg" width="400" height="267" alt="">
        <img src="../../../img/Новая папка (3)/0-02-0a-901f45026a482d9bd44cdcaa5529ae4bc427bc27fbebc00904b64adeb273b3b0_1aab28adcfc029cd.jpg" width="400" height="267" alt="">
        <img src="../../../img/Новая папка (3)/0-02-0a-a2d5501a97ad48e1e2c55b92ff9d9723ae373c240fda31c0c4515e3304187b23_70acbf09e88fdef2.jpg" width="400" height="267" alt="">
        <img src="../../../img/Новая папка (3)/0-02-0a-c00bf45e735524d96396bcf3ae5d62c1aa4664b8a1ffbef71fc13ae73c986174_47b9c3edc4c1fb34.jpg" width="400" height="267" alt="">
        <img src="../../../img/Новая папка (3)/0-02-05-d2567f3d55a8c6c7592903c5ed81c2adf92ad48e253a882bdaf5afc84e10b0ba_66e8c37.jpg" width="400" height="267" alt="">
        <img src="../../../img/Новая папка (3)/20220628_103130.jpg" width="400" height="267" alt="">
        <img src="../../../img/Новая папка (3)/0-02-05-c7e7444536f784537df8814043cf2aa0b55c278bc4bdbd8998f8aaa1d52f8683_c783876e256428a7.jpg" width="267" height="400" alt="">
        <img src="../../../img/Новая папка (3)/20211116_125138.jpg" width="267" height="400" alt="">
        <img src="../../../img/Новая папка (3)/20230511_125711.jpg" width="400" height="267" alt="">
        <img src="../../../img/Новая папка (3)/20230511_130214.jpg" width="400" height="267" alt="">
        <img src="../../../img/Новая папка (3)/20230511_130517.jpg" width="400" height="267" alt="">
        <img src="../../../img/Новая папка (3)/20230512_093905.jpg" width="400" height="267" alt="">
        <img src="../../../img/Новая папка (3)/20220105_121018.jpg" width="267" height="400" alt="">
        <img src="../../../img/Новая папка (3)/20230512_093935.jpg" width="400" height="267" alt="">
        <img src="../../../img/Новая папка (3)/20230512_094042.jpg" width="400" height="267" alt="">
        <img src="../../../img/Новая папка (3)/20230512_094702.jpg" width="400" height="267" alt="">
        <img src="../../../img/Новая папка (3)/photo_2024-03-18_10-25-02.jpg" width="400" height="267" alt="">
        <img src="../../../img/Новая папка (3)/photo_2024-03-18_10-24-37.jpg" width="267" height="400" alt="">
        <img src="../../../img/Новая папка (3)/photo_2024-03-18_10-25-52.jpg" width="400" height="267" alt="">
        <img src="../../../img/Новая папка (3)/photo_2024-03-18_10-24-41.jpg" width="267" height="400" alt="">
        <img src="../../../img/Новая папка (3)/photo_2024-03-18_13-29-26.jpg" width="400" height="267" alt="">
        <img src="../../../img/Новая папка (3)/photo_2024-03-18_13-30-38.jpg" width="400" height="267" alt="">
        <img src="../../../img/Новая папка (3)/photo_2024-03-18_13-30-45.jpg" width="400" height="267" alt="">
        <img src="../../../img/Новая папка (3)/photo_2024-03-18_13-31-04.jpg" width="400" height="267" alt="">
        <img src="../../../img/Новая папка (3)/photo_2024-03-18_13-31-11.jpg" width="400" height="267" alt="">
        <img src="../../../img/Новая папка (3)/photo_2024-03-18_13-31-30.jpg" width="267" height="400" alt="">
        <img src="../../../img/Новая папка (3)/photo_2024-03-18_14-20-21.jpg" width="400" height="267" alt="">
        <img src="../../../img/Новая папка (3)/0-02-05-fe3c6983cc4b2436e8067bbe74e9b948b8d3d8bfb5369938dadb0ff828c7389d_1b57917094050be4.jpg" width="267" height="400" alt="">
        <img src="../../../img/Новая папка (3)/photo_2024-03-18_14-20-43.jpg" width="400" height="267" alt="">
        <img src="../../../img/Новая папка (3)/photo_2024-03-18_14-21-04.jpg" width="400" height="267" alt="">
        <img src="../../../img/Новая папка (3)/photo_2024-03-18_14-21-40.jpg" width="400" height="267" alt="">
        <img src="../../../img/Новая папка (3)/photo_2024-03-18_14-22-52.jpg" width="400" height="267" alt="">
        <img src="../../../img/Новая папка (3)/photo_2024-03-18_10-25-36.jpg" width="267" height="400" alt="">
        <img src="../../../img/Новая папка (3)/photo_2024-03-18_14-22-58.jpg" width="400" height="267" alt="">
        <img src="../../../img/Новая папка (3)/photo_2024-03-18_14-23-04.jpg" width="400" height="267" alt="">
        <div class="clear"></div>
    
    </div>
</div>
                            
            `);
        });
    }
    afterRender() {
        galery();
    }
}

export default Galery;