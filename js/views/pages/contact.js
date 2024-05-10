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
                        <div class="address">Адрас: 222645, Мінская вобласть, Клецкі раён, аг. Лазавічы, вул. Перамогі, 1</div>
                        <div class="tel">Тэлефон: <a href="tel:+8017 93 60786">8017 93 60786</a></div>
                        <div class="mail">E-mail: <a href="mailto: lazovichi@kletsk-asveta.gov.by">lazovichi@kletsk-asveta.gov.by</a></div>
                    </div>
                </div>
                <div class="header-contact__button">
                    <button class="button">Адправіць паведамленне</button>
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
                            <button class="form__btn" type="submit">Адправіть</button>
                            <div class="form__send-result"></div>
                        </div>
                    </form>

        </div>
    </div>

            `);
        });
    }
afterRender() {
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
     

    
        const form = document.getElementById('form');
        const formBtn = document.querySelector('.form__btn');
        const formSendResult = document.querySelector('.form__send-result');
        formSendResult.textContent = '';
        formBtn.addEventListener('click',(event) => {
            event.preventDefault();
             // Получение данных из формы
        const formData = new FormData(form);
        const formDataObject = {};
    
        formData.forEach((value, key) => {
            formDataObject[key] = value.trim().replace(/\s+/g, ' ');
        });
    
        // Валидация полей на клиенте
        const validationErrors = validateForm(formDataObject);
    
        // Обновление интерфейса для отображения ошибок
        displayErrors(validationErrors);
        if (validationErrors.length > 0) return;
    
        // Отправка формы на бэк
        sendFormData(form, formBtn, formSendResult, formDataObject);
        })
    
       
    
    
    
    async function sendFormData(form, formBtn, formSendResult, formDataObject) {
    
        try {
            formBtn.textContent = 'Loading...';
            formBtn.disabled = true;
    
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataObject),
            });
    
            if (response.ok) {
                formSendResult.textContent = 'Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.';
                form.reset();
            } else if (response.status === 422) {
                const errors = await response.json();
                console.log(errors);
                throw new Error('Ошибка валидации данных');
            } else {
                throw new Error(response.statusText);
            }
    
        } catch (error) {
            console.error(error.message);
            formSendResult.textContent = 'Письмо не отправлено! Попробуйте позже.';
            formSendResult.style.color = 'red';
    
        } finally {
            formBtn.textContent = 'Отправить';
            formBtn.disabled = false;
        }
    }
    
    function validateForm(formData) {
        const { name, email, phone, message } = formData;
    
        const phoneRegex = /^\+[0-9]{5,15}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        const errors = [];
    
        if (!name) {
            errors.push({ field: 'name', message: 'Пожалуйста, введите ваше ФИО.' });
        } else if (name.length < 5 || name.length > 20) {
            errors.push({ field: 'name', message: 'Пожалуйста, введите корректные данные. Пример: Быков Иван Петрович' });
        }
    
        if (!phone) {
            errors.push({ field: 'phone', message: 'Пожалуйста, введите номер телефона.' });
        } else if (!phoneRegex.test(phone)) {
            errors.push({ field: 'phone', message: 'Пожалуйста, введите корректный номер телефона. Пример: +375257851204' });
        }
    
        if (!email) {
            errors.push({ field: 'email', message: 'Пожалуйста, введите адрес электронной почты.' });
        } else if (!emailRegex.test(email) || (email.length < 5 || email.length > 100)) {
            errors.push({ field: 'email', message: 'Пожалуйста, введите корректный адрес электронной почты. Пример: frontend@gmail.com' });
        }
    
        if (!message) {
            errors.push({ field: 'message', message: 'Пожалуйста, введите сообщение.' });
        } else if (message.length < 20 || message.length > 400) {
            errors.push({ field: 'message', message: 'В сообщении должно быть мин. 20 и не более 400 символов.' });
        }
        
        return errors;
    }
    
    function displayErrors(errors) {
        // Скрытие всех ошибок перед отображением новых
        const errorElements = document.querySelectorAll('.form__error');
        errorElements.forEach((errorElement) => {
            errorElement.textContent = '';
        });
    
        if(errors.length < 1) return;
    
        // Отображение ошибок для соответствующих полей
        errors.forEach((error) => {
            const { field, message } = error;
            const errorElement = document.querySelector(`[data-for="${field}"]`);
            errorElement.textContent = message;
        });
    }
    
}


}

export default Contact;