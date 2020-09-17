function modalSetup(noJsElement, modalElement) {
	noJsElement.classList.remove('no-js');
	modalElement.setAttribute('aria-hidden', true)
}

const toggleHiddenValue = (modalToShow) => {
	const hiddenValue = modalToShow.getAttribute('aria-hidden');
	const newValue = hiddenValue === 'true' ? 'false' : 'true';
	modalToShow.setAttribute('aria-hidden', newValue);
}

// Open Modal
function openModalHandler(openButton, modalToShow, firstFocusableItem) {
	openButton.addEventListener('click', openModal.bind(null, modalToShow, firstFocusableItem), false);
}

const openModal = (modalToShow, firstFocusableItem) => {
	toggleHiddenValue(modalToShow);
	firstFocusableItem.focus();
}

// Close Modal
function closeModalHandler(closeButton, modalToHide, buttonOpenedModal) {
	closeButton.addEventListener('click', closeModal.bind(null, modalToHide, buttonOpenedModal));
}

const closeModal = (modalToHide, buttonOpenedModal) => {
	toggleHiddenValue(modalToHide);
	buttonOpenedModal.focus();
}

// Handle Keyboard
function closeModalKeyHandler() {
	document.addEventListener('keydown', closeModalEscKey);
}

const closeModalEscKey = (e) => {
	if (e.key === 'Escape') {
		closeModal();
	}
}

// To Do: finish this to trap focus
const trapFocus = () => {
	const [...focusableElements] = modal.querySelectorAll('input', 'button', 'a') 
	const lastFocusableEl = focusableElements[0];
	const firstFocusableEl = focusableElements[focusableElements.length - 1];
	// if(document.activeElement === firstFocusableEl) {
	// 	lastFocusableEl.focus();
	// } else if (document.activeElement === lastFocusableEl){
	// 	firstFocusableEl.focus();
	// }
}

export {
	toggleHiddenValue,
	modalSetup,
	openModalHandler,
	closeModalHandler,
	closeModalKeyHandler
}