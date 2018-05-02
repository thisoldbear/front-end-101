const popups = document.querySelectorAll('[data-binding="popup"]');

popups.forEach((popup, index) => {
  let popupId = popup.dataset.popupId;
  let storageId = `storageId${popupId}`;

  if (!window.localStorage.getItem(storageId)) {
    setTimeout(() => {
      popup.classList.add('is-visible');
    }, (index + 1) * 3000);

    popup.addEventListener('click', (event) => {
      if (event.target.dataset.binding === 'popup-close') {
        popup.classList.remove('is-visible');
        window.localStorage.setItem(storageId, storageId);
      }
    });
  }
});
