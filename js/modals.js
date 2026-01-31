const settingsIcon = document.getElementById('settings-icon');
const modalSettings = document.querySelector('.modal-settings');
const overlay = document.querySelector('.overlay');

const settingItemInput = document.querySelectorAll('.setting-item__input');

function toggleSettingsModal() {
  modalSettings.classList.toggle('visible');
  overlay.classList.toggle('visible');
}

export function initModalSettings() {
  settingsIcon.addEventListener('click', toggleSettingsModal);
  overlay.addEventListener('click', toggleSettingsModal);

  settingItemInput.forEach((input) => {
    const targetId = input.dataset.target;
    const targetElement = document.querySelector(`.${targetId}`);
    
    const saved = localStorage.getItem(targetId);
    input.checked = saved === 'true';
    if (input.checked) {
      targetElement.classList.remove('invisible');
    } else {
      targetElement.classList.add('invisible');
    }

    input.addEventListener('change', () => {
      if (input.checked) {
        targetElement.classList.remove('invisible');
      } else {
        targetElement.classList.add('invisible');
      }
      localStorage.setItem(targetId, input.checked.toString());
    });
  });
}
