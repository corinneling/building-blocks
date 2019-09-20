

function modalSetup() {
	const noJs = document.querySelector('.no-js');
	noJs.classList.remove('no-js');

	modal.setAttribute('aria-hidden', true)
}

function openModalHandler() {
	openModalButton.addEventListener('click', openModal);
}

function closeModalHandler() {
	closeModalButton.addEventListener('click', closeModal);
}

async function openModal(e) {
	let hiddenValue = modal.getAttribute('aria-hidden');
	if (hiddenValue === 'true') {
		hiddenValue = 'false';
	}
	await modal.setAttribute('aria-hidden', hiddenValue);

	const formField = document.getElementById('newsletter-name');
	formField.focus();
	trapFocus(e);
}

async function closeModal() {
	let hiddenValue = modal.getAttribute('aria-hidden');
	if (hiddenValue === 'false') {
		hiddenValue = 'true';
	}
	await modal.setAttribute('aria-hidden', hiddenValue);
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
