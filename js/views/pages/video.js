import Component from '../component.js';

class Video extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
            <div class="wrapper-video">
                <div class="title">
                    <h1>Відэаэкскурсіі</h1>
                </div>
            <div class="container-video">
                <div class="title-video">
                    <h2>
                        Знаемства з музеем
                    </h2>
                </div>
                <div class="video-video">
                    <iframe width="730" height="485" src="https://www.youtube.com/embed/eqP4FHAOQ18?si=1bQK6EU5S98qAAC4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <div class="container-video">
                <div class="title-video">
                    <h2>
                        Скарбонка часу
                    </h2>
                </div>
                <div class="video-video">
                    <iframe width="730" height="485" src="https://www.youtube.com/embed/aQOtSbZhjQg?si=WtXb5ln0X_I9yIuT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <div class="container-video">
                <div class="title-video">
                    <h2>
                        Нашчадкі традыцый
                    </h2>
                </div>
                <div class="video-video">
                    <iframe width="730" height="485" src="https://www.youtube.com/embed/es3is48VzNA?si=ijz-p3Nt3TgUC1Rk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        
        </div> 
            `);
        });
    }
}

export default Video;