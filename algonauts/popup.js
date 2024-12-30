    // Get elements
    const openPopupButton = document.getElementById('openPopup');
    const closePopupButton = document.getElementById('closePopup');
    const popupOverlay = document.getElementById('popupOverlay');

    // Show the pop-up
    openPopupButton.addEventListener('click', () => {
      popupOverlay.style.display = 'block';
    });

    // Close the pop-up
    closePopupButton.addEventListener('click', () => {
      popupOverlay.style.display = 'none';
    });

    // Close the pop-up when clicking outside the content
    popupOverlay.addEventListener('click', (event) => {
      if (event.target === popupOverlay) {
        popupOverlay.style.display = 'none';
      }
    });