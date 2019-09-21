import { modalSetup, openModalHandler, closeModalHandler, closeModalKeyHandler } from './helpers';

const openModalButton = document.querySelector('.button--open-modal');
const closeModalButton = document.querySelector('.button--close-modal');
const modal = document.querySelector('.modal');
const noJs = document.querySelector('.no-js');
const formField = document.getElementById('newsletter-name');

modalSetup(noJs, modal);
openModalHandler(openModalButton, modal, formField);
closeModalHandler(closeModalButton, modal, openModalButton);
closeModalKeyHandler();