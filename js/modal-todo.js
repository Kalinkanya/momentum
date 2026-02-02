const modalToDo = document.querySelector('.modal-todo');
const todoIcon = document.getElementById('todo-icon');
const overlay = document.querySelector('.overlay');
const modalSettings = document.querySelector('.modal-settings');
const addButton = document.querySelector('.modal-todo__add-btn');
const checkboxes = document.querySelectorAll('.modal-todo__label');
const todoItems = document.querySelectorAll('.modal-todo__item');

function toggleToDoModal() {
  modalToDo.classList.toggle('visible');
  overlay.classList.toggle('visible');
  modalSettings.classList.remove('visible');
}

function addTask() {
  const input = document.querySelector('.modal-todo__input');
  const text = input.value.trim();
  if (!text) return;
  
  const li = document.createElement('li');
  li.className = 'modal-todo__item';
  li.innerHTML = `
    <label class="modal-todo__label">
      <input type="checkbox" class="modal-todo__checkbox">
      <span class="modal-todo__text">${text}</span>
    </label>
    <svg class="modal-todo__delete-svg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>

  `;

  const checkbox = li.querySelector('.modal-todo__checkbox');
  const span = li.querySelector('.modal-todo__text');
  
  checkbox.addEventListener('change', () => {
    span.classList.toggle('checked');
  });

  const deleteButton = li.querySelector('.modal-todo__delete-svg');
  deleteButton.addEventListener('click', () => {
    li.remove();
  });

  document.querySelector('.modal-todo__list').appendChild(li);
  input.value = '';
}



export function initModalToDo() {
  todoIcon.addEventListener('click', toggleToDoModal);
  overlay.addEventListener('click', toggleToDoModal);
  addButton.addEventListener('click', addTask);
  checkboxes.forEach((checkbox) => {
    const input = checkbox.querySelector('.modal-todo__checkbox');
    const span = checkbox.querySelector('.modal-todo__text');
    input.addEventListener('change', () => {
      span.classList.toggle('checked');
    });
  });

  todoItems.forEach((item) => {
    const deleteButton = item.querySelector('.modal-todo__delete-svg');
    deleteButton.addEventListener('click', () => {
      item.remove();
    })
  })
}