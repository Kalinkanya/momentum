const settingsIcon = document.getElementById('settings-icon');
const modalSettings = document.querySelector('.modal-settings');
const overlay = document.querySelector('.overlay');

const settingItemInput = document.querySelectorAll('.setting-item__input');

function toggleSettingsModal() {
  modalSettings.classList.toggle('visible');
  overlay.classList.toggle('visible');
}

function toggleBlock(element) {
  element.classList.toggle('invisible');
}


export function initModalSettings() {
  settingsIcon.addEventListener('click', toggleSettingsModal);
  overlay.addEventListener('click', toggleSettingsModal);
  settingItemInput.forEach((input) => {
    input.addEventListener('change', () => {
      const targetId = input.dataset.target;
      const targetElement = document.querySelector(`.${targetId}`);
      if (targetElement) {
        toggleBlock(targetElement);
      }
    });
  });
}
