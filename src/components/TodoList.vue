<template>
  <ul class="todo-list"> <!-- Container for the list of todos -->
    <li v-for="todo in todos" :key="todo.id" :class="{ completed: todo.completed }">
      <span class="todo-text" @click="toggleTodoComplete(todo)"> <!-- Clickable text to toggle completion -->
        {{ todo.text }} <!-- Display the todo text -->
      </span>
      <div class="action-buttons"> <!-- Container for action buttons -->
        <label class="checkbox-container"> <!-- Custom checkbox for marking todo as complete -->
          <input type="checkbox" :checked="todo.completed" @change="toggleTodoComplete(todo)" />
          <span class="checkmark"></span> <!-- Visual representation of the checkbox -->
        </label>
        <button @click="editTodo(todo)" class="edit-btn" :disabled="todo.completed" title="Edit">✏️</button>
        <!-- Edit button, disabled if todo is complete -->
        <button @click="removeTodo(todo.id)" class="remove-btn" title="Edit">🗑️</button>
        <!-- Remove button to delete the todo -->
      </div>
    </li>
  </ul>
</template>

<script setup>
import useTodos from '../store/useTodos'  // Import the todos store for state management

const { todos, toggleTodo, editTodo, removeTodo } = useTodos()  // Destructure methods and todos from the store

function toggleTodoComplete(todo) {
  toggleTodo(todo)  // Call the method to toggle the completion status of the todo
}
</script>


<style scoped>
/* General Todo List Styling */
.todo-list {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  margin-bottom: 10px;
  border-radius: 6px;
  transition: background-color 0.3s, box-shadow 0.3s;
}

li:hover {
  background-color: #f9f9f9;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
}

li.completed span {
  text-decoration: line-through;
  color: #5f6368;
}

.edit-btn:disabled {
  filter: grayscale(1);
  color: #a9a9a9;
  /* Grey text color */
  cursor: not-allowed;
  /* Change cursor to indicate it's disabled */
}


/* Content and Buttons Styling */
.todo-text {
  cursor: pointer;
  font-size: 16px;
  color: #333;
  flex-grow: 1;
  /* Allow text to take available space */
}

/* Custom Checkbox Styling */
.checkbox-container {
  display: inline-block;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  user-select: none;
  padding: 10px 15px;
}

.checkbox-container input {
  opacity: 0;
  position: absolute;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #f1f3f4;
  border: 2px solid #dadce0;
  border-radius: 4px;
  transition: background-color 0.3s, border-color 0.3s;
}

.checkbox-container input:checked~.checkmark {
  background-color: #34a853;
  border-color: #34a853;
}

.checkbox-container .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container input:checked~.checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  left: 6px;
  top: 1px;
  width: 6px;
  height: 12px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

/* Action Buttons Styling */
.action-buttons {
  display: flex;
  align-items: center;
  /* Center vertically */
  gap: 8px;
}

.edit-btn,
.remove-btn {
  background-color: transparent;
  color: #333;
  border: none;
  cursor: pointer;
  font-size: 18px;
  transition: color 0.3s, transform 0.3s;
}

.edit-btn:hover {
  color: #fbbc05;
  transform: scale(1.1);
}

.remove-btn:hover {
  color: #ea4335;
  transform: scale(1.1);
}
</style>
