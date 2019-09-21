import { handleTabClick, handleTabKeyDown } from './helpers';

const tabButtons = document.querySelectorAll('[role=tab]');

handleTabClick(tabButtons);
handleTabKeyDown(tabButtons)