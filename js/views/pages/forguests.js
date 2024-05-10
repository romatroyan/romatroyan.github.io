import Component from '../component.js';

class ForGuests extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
                            
            <div class="wrapper-сooperation">
    
            <div class="title-сooperation title-img">
                <img src="../../../img/forguests/1_page-0001.jpg" alt="">
                        
            </div>
            <div class="text-сooperation text-img">
                <img src="../../../img/forguests/1_page-0002.jpg" alt="">
            </div>
            
            <div class="text-сooperation text-img">
                <img src="../../../img/forguests/1_page-0003.jpg" alt="">
            </div>
            
        </div>                
            `);
        });
    }
}

export default ForGuests;