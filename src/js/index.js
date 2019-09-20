import setInitialAriaValue from './helpers/set-aria';
import { accordionToggleHandler } from './multi-select-accordion';

// Multi Select Accordion
const buttons = document.querySelectorAll('.m-accordion__button');
const contentSections = document.querySelectorAll('.m-accordion__content');

// if(document.querySelector('.m-accordion')) {
  setInitialAriaValue(buttons, 'aria-expanded', 'false');
  setInitialAriaValue(contentSections, 'aria-hidden', 'true');
  accordionToggleHandler(buttons);
// }


// Modal
const openModalButton = document.querySelector('.button--open-modal');
const closeModalButton = document.querySelector('.button--close-modal');
const modal = document.querySelector('.modal');