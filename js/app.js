import {parseRequestURL} from './helpers/utils.js';

import Header from './views/partials/header.js';
import Footer from './views/partials/footer.js';

import Home from './views/pages/home.js';
import AboutMuseum from './views/pages/aboutMuseum.js';
import HistoryAndAchievements from './views/pages/historyAndAchievements.js';
import Exposition from './views/pages/exposition.js';
import Vr from './views/pages/vr.js';
import Contact from './views/pages/contact.js';
import Error404 from './views/pages/error404.js';


const Routes = {
    '/' : Home,
    '/about_museum' : AboutMuseum,
    '/history_and_achievements' : HistoryAndAchievements,
    '/exposition' : Exposition,
    '/vr' : Vr,
    '/contact' : Contact,
};

function router() {
    const headerContainer = document.getElementsByClassName('header-container')[0],
          contentContainer = document.getElementsByClassName('content-container')[0],
          footerContainer = document.getElementsByClassName('footer-container')[0],
          header = new Header(),
          footer = new Footer();

    header.render().then(html => headerContainer.innerHTML = html);

    const request = parseRequestURL(),
        parsedURL = `/${request.resource}`,
        page = Routes[parsedURL] ? new Routes[parsedURL]() : new Error404();

    page.render().then(html => {
        contentContainer.innerHTML = html;
        page.afterRender();
    });

    footer.render().then(html => footerContainer.innerHTML = html);
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);