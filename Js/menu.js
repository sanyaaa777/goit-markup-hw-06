(() => {
    const refs = {
     
      openModalBtn: document.querySelector("[data-menu-open]"),
     
      closeModalBtn: document.querySelector("[data-menu-close]"),
     
      modal: document.querySelector("[data-menu]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleMenu);
    refs.closeModalBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
     
      refs.modal.classList.toggle("is-open");
    }
  })();