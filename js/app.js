import {parseRequestURL} from './helpers/utils.js';

import Header from './views/partials/header.js';
import Footer from './views/partials/footer.js';

import Home from './views/pages/home.js';
import Card from './views/pages/card.js';
import Document from './views/pages/document.js';
import ImgDocument from './views/pages/imgDocument.js';
import Video from './views/pages/video.js';
import Vr from './views/pages/vr.js';
import Contact from './views/pages/contact.js';
import Error404 from './views/pages/error404.js';
import Class from './views/pages/class.js';
import Ecscurs from './views/pages/ecscurs.js';
import Suitcase from './views/pages/suitcase.js';
import Game from './views/pages/game.js';
import Material from './views/pages/material.js';
import Vrmuzbel from './views/pages/vrmuzbel.js';
import Achieving from './views/pages/achieving.js';
import Materialwork from './views/pages/materialwork.js';
import Cooperation from './views/pages/cooperation.js';
import Histori from './views/pages/histori.js';
import Direction from './views/pages/direction.js';
import Exposition from './views/pages/exposition.js';
import Galery from './views/pages/galery.js';
import Metod from './views/pages/metod.js';
import ForGuests from './views/pages/forguests.js';
import Mapkleck from './views/pages/mapkleck.js';

const Routes = {
    '/' : Home,
    '/achieving': Achieving,
    '/histori': Histori,
    '/suitcase': Suitcase,
    '/materialwork': Materialwork,
    '/direction': Direction,
    '/mapkleck' : Mapkleck,
    '/forguests': ForGuests,
    '/metod': Metod,
    '/cooperation': Cooperation,
    '/ecscurs': Ecscurs,
    '/class': Class,
    '/vrmuzbel': Vrmuzbel,
    '/galery': Galery,
    '/card' : Card,
    '/imgDocumen': ImgDocument,
    '/document' : Document,
    '/exposition': Exposition,
    '/video' : Video,
    '/vr' : Vr,
    '/contact' : Contact,
    '/material': Material,
    '/game': Game,
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