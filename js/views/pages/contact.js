import Component from '../component.js';

class Contact extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
            <div class="header-content__inner">
        <div class="header-container__contact">
            <div class="header-contact__text">
                <h1>Звяжыцеся з намі</h1>
            </div>
                <div class="contact-information">
                    <div class="contact-information__map">
                        <div style="position:relative;overflow:hidden;"><a href="https://yandex.by/maps/org/shkola/194942712395/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Школа</a><a href="https://yandex.by/maps/29630/minsk-district/category/school/184106240/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Общеобразовательная школа в Минской области</a><iframe src="https://yandex.by/map-widget/v1/?ll=26.880023%2C52.961147&mode=poi&poi%5Bpoint%5D=26.879512%2C52.961141&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D194942712395&z=18.74" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
                    </div>
                    <div class="contact-information__info">
                        <div class="address">Адрас: 222645, Мінская вобласть, Клецкі раён, аг. Лазавічі, вул. Перамогі, 1</div>
                        <div class="tel">Тэлефон: <a href="tel:+8017 93 60786">8017 93 60786</a></div>
                        <div class="mail">E-mail: <a href="mailto: lazovichi@kletsk-asveta.gov.by">lazovichi@kletsk-asveta.gov.by</a></div>
                    </div>
                </div>
                <div class="header-contact__button">
                    <button class="button">Отправіть паведамленне</button>
                </div>
                <div class="wrapper wrapper-none">
                    <form id="form" onsubmit="submitForm(event)">
                        <div class="form__left-decoration"></div>
                        <div class="form__right-decoration"></div>
                        <div class="form__circle"></div>
                        <div class="form__wrapper">
                            <h3>Написать нам</h3>
                            <div class="form__field-inner">
                                <input type="text" name="name" placeholder="ФИО">
                                <span class="form__error" data-for="name"></span>
                            </div>
                            <div class="form__field-inner">
                                <input type="tel" name="phone" placeholder="Телефон">
                                <span class="form__error" data-for="phone"></span>
                            </div>
                            <div class="form__field-inner">
                                <input type="text" name="email" placeholder="Email">
                                <span class="form__error" data-for="email"></span>
                            </div>
                            <div class="form__field-inner">
                                <textarea name="message" placeholder="Сообщение..." rows="3"></textarea>
                                <span class="form__error" data-for="message"></span>
                            </div>
                            <button class="form__btn" type="submit">Отправить</button>
                            <div class="form__send-result"></div>
                        </div>
                    </form>

        </div>
    </div>

            `);
        });
    }
afterRender() {
    this.setForm();
}

setForm() {
    const button = document.getElementsByClassName('button')[0],
    wrapper = document.getElementsByClassName('wrapper')[0];


    button.addEventListener('click', () => {
        wrapper.classList.remove('wrapper-none');
        if(!wrapper.classList.contains('wrapper-none')) { 
            button.setAttribute('disabled', 'disabled');
            button.classList.add('disabled');
        }
     }
    )
}

}

export default Contact;