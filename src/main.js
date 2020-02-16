const MODAL_CONTAINER_VISIBLE_CLASS = "modal__container_visible";

const modalContainer = document.querySelector(".modal__container");
const modalContent = document.querySelector(".modal__content");
const modalClose = document.querySelector(".modal__block__close");

const tariffsBlocks = document.querySelectorAll(".tariffs__block");

function openModal({ innerHTML }) {
  modalContent.innerHTML = innerHTML;
  modalContainer.classList.add(MODAL_CONTAINER_VISIBLE_CLASS);
}

function closeModal() {
  modalContainer.classList.remove(MODAL_CONTAINER_VISIBLE_CLASS);
}

tariffsBlocks.forEach(block => {
  block.addEventListener("click", e => {
    e.preventDefault();
    openModal(e.currentTarget);
  });
});

modalContainer.addEventListener("click", e => {
  if (e.target === e.currentTarget) {
    closeModal();
  }
});

modalClose.addEventListener("click", e => {
  e.preventDefault();
  closeModal();
});
