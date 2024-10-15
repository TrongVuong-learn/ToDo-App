import { ref, onMounted, watch } from 'vue';

const newTodo = ref('');
const todos = ref([
  // Default items to show when the app loads for the first time
  { id: 1, text: 'Buy groceries', completed: false },
  { id: 2, text: 'Read a book', completed: false },
  { id: 3, text: 'Exercise for 30 mins', completed: true }
]);
const editingTodo = ref(null);
const showModal = ref(false);
const addErrorMessage = ref(''); // Error message for adding todos
const updateErrorMessage = ref(''); // Error message for updating todos

// Load todos from localStorage
onMounted(() => {
  const savedTodos = localStorage.getItem('todos');
  if (savedTodos) {
    todos.value = JSON.parse(savedTodos);
  } else {
    // Save the default items to localStorage if no todos exist
    localStorage.setItem('todos', JSON.stringify(todos.value));
  }
});

// Save todos to localStorage whenever it changes
watch(todos, (newTodos) => {
  localStorage.setItem('todos', JSON.stringify(newTodos));
}, { deep: true });

// Validation function for adding and updating
function validateTodo(todoText) {
  if (!todoText.trim()) {
    return 'Todo text cannot be empty!';
  } else if (todoText.length < 3) {
    return 'Todo must be at least 3 characters long.';
  }
  return ''; // No error
}

// Add todo
function addTodo() {
  const error = validateTodo(newTodo.value);
  if (error) {
    addErrorMessage.value = error; // Set add error message
  } else {
    todos.value.push({
      id: Date.now(),
      text: newTodo.value.trim(),
      completed: false
    });
    newTodo.value = '';
    addErrorMessage.value = ''; // Clear add error message
  }
}

// Toggle completion
function toggleTodo(todo) {
  todo.completed = !todo.completed;
}

// Remove todo
function removeTodo(id) {
  todos.value = todos.value.filter(todo => todo.id !== id);
}

// Edit todo
function editTodo(todo) {
  editingTodo.value = { ...todo };
  showModal.value = true;
}

// Update todo
function updateTodo() {
  const error = validateTodo(editingTodo.value.text);
  if (error) {
    updateErrorMessage.value = error; // Set update error message
  } else {
    const index = todos.value.findIndex(todo => todo.id === editingTodo.value.id);
    if (index !== -1) {
      todos.value[index] = { ...editingTodo.value };
      editingTodo.value = null;
      showModal.value = false;
      updateErrorMessage.value = ''; // Clear update error message
    }
  }
}

// Cancel edit
function cancelEdit() {
  editingTodo.value = null;
  showModal.value = false;
}

export default function useTodos() {
  return {
    newTodo,
    todos,
    editingTodo,
    showModal,
    addErrorMessage, // Expose add error message
    updateErrorMessage, // Expose update error message
    addTodo,
    toggleTodo,
    removeTodo,
    editTodo,
    updateTodo,
    cancelEdit
  };
}
