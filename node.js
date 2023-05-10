const newItem = document.getElementById('new-item');
const todoItems = document.getElementById('todo-items');

function addItem() {
  if (newItem.value.trim() !== '') {
    const li = document.createElement('li');
    li.innerText = newItem.value;
    todoItems.appendChild(li);
    newItem.value = '';
  }
}

function toggleCompleted(event) {
  const li = event.target.closest('li');
  li.classList.toggle('completed');
}

todoItems.addEventListener('click', toggleCompleted);
