<template>
  <div :class="['todo-app', theme]"> <!-- Apply dynamic classes based on the current theme -->
    <h1>Todo App</h1>
    <!-- Uncomment the line below to enable the ThemeToggle component -->
    <!-- <ThemeToggle /> -->
    <AddTodo /> <!-- Component for adding new todo items -->
    <TodoList /> <!-- Component for displaying the list of todos -->
    <EditModal /> <!-- Modal for editing an existing todo -->
  </div>
</template>

<script setup>
import AddTodo from './components/featured/AddTodo.vue'
import TodoList from './components/TodoList.vue'
import EditModal from './components/featured/EditModal.vue'
// import ThemeToggle from './components/ThemeToggle.vue'
import { ref, onMounted } from 'vue'

const theme = ref('light')  // Initialize theme state, defaulting to 'light'

// Load the saved theme on mount
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')  // Retrieve the saved theme from localStorage
  if (savedTheme) {
    theme.value = savedTheme  // Set the theme value to the saved theme
    document.documentElement.setAttribute('data-theme', savedTheme)  // Update the document's theme attribute
  }
})
</script>


<style scoped>
/* Add your existing styles */

.todo-app {
  width: 60vw;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #202124;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h1 {
  color: #4285f4;
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5em;
  font-weight: bold;
}
</style>
