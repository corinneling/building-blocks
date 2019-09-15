import { setInitialAriaValue } from './multi-select-accordion';
import { accordionToggleHandler } from './multi-select-accordion';

// Multi Select Accordion
const buttons = document.querySelectorAll('.m-accordion__button');
const contentSections = document.querySelectorAll('.m-accordion__content');

// if(document.querySelector('.m-accordion')) {
  setInitialAriaValue(buttons, 'aria-expanded', 'false');
  setInitialAriaValue(contentSections, 'aria-hidden', 'true');
  accordionToggleHandler(buttons);
// }