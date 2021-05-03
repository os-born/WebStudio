(() => {
  const refs = {
    openModalBtn: document.querySelector('[mobile-modal-open]'),
    closeModalBtn: document.querySelector('[mobile-modal-close]'),
    modal: document.querySelector('[mobile-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();