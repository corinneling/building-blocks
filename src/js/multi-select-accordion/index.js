import setInitialAriaValue from '../helpers/set-aria';
import { accordionToggleHandler } from './helpers';

const buttons = document.querySelectorAll('.m-accordion__button');
const contentSections = document.querySelectorAll('.m-accordion__content');

if (buttons) {
  setInitialAriaValue(buttons, 'aria-expanded', 'false');
  setInitialAriaValue(contentSections, 'aria-hidden', 'true');
  accordionToggleHandler(buttons);
}
