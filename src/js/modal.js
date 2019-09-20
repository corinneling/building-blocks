const openModalButton = document.querySelector('.button--open-modal');
const closeModalButton = document.querySelector('.button--close-modal');
const modal = document.querySelector('.modal');
const noJs = document.querySelector('.no-js');

function modalSetup(noJsElement, modalElement) {
	noJsElement.classList.remove('no-js');
	modalElement.setAttribute('aria-hidden', true)
}

function openModalHandler() {
	openModalButton.addEventListener('click', openModal);
}

function closeModalHandler() {
	closeModalButton.addEventListener('click', closeModal);
}

function closeModalKeyHandler() {
	document.addEventListener('keydown', closeModalEscKey);
}

const toggleHiddenValue = () => {
	const hiddenValue = modal.getAttribute('aria-hidden');
	const newValue = hiddenValue === 'true' ? 'false' : 'true';
	modal.setAttribute('aria-hidden', newValue);
}

const openModal = (e) => {
	toggleHiddenValue();

	const formField = document.getElementById('newsletter-name');
	formField.focus();
	trapFocus(e);
}

const closeModal = () => {
	toggleHiddenValue();

	openModalButton.focus();
}

const closeModalEscKey = (e) => {
	if (e.key === 'Escape') {
		closeModal();
	}
}

const trapFocus = (e) => {
	const [...focusableElements] = modal.querySelectorAll('input', 'button', 'a') 
	const lastFocusableEl = focusableElements[0];
	const firstFocusableEl = focusableElements[focusableElements.length - 1];
	// if(document.activeElement === firstFocusableEl) {
	// 	lastFocusableEl.focus();
	// } else if (document.activeElement === lastFocusableEl){
	// 	firstFocusableEl.focus();
	// }
}

modalSetup(noJs, modal);
openModalHandler();
closeModalHandler();
closeModalKeyHandler();

export {
	toggleHiddenValue,
	modalSetup,
}