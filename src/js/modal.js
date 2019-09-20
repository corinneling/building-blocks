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

 function openModal(e) {
	const hiddenValue = modal.getAttribute('aria-hidden');
	const newValue = hiddenValue === 'true' ? 'false' : 'true';
	modal.setAttribute('aria-hidden', newValue);

	const formField = document.getElementById('newsletter-name');
	formField.focus();
	trapFocus(e);
}

function closeModal() {
	let hiddenValue = modal.getAttribute('aria-hidden');
	if (hiddenValue === 'false') {
		hiddenValue = 'true';
	}
	modal.setAttribute('aria-hidden', hiddenValue);
	openModalButton.focus();
}

function closeModalKeyHandler() {
	document.addEventListener('keydown', closeModalEscKey);
}

function closeModalEscKey(e) {
	if (e.key === 'Escape') {
		closeModal();
	}
}

function trapFocus(e) {
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
