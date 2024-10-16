<template>
  <div class="add-todo">
    <!-- Input field for entering a new todo item -->
    <input v-model="newTodo" @keyup.enter="handleAddTodo" placeholder="Add a new todo" />
    <!-- Button to add the new todo item -->
    <button @click="handleAddTodo">Add</button>
    <!-- Display an error message if there's a validation error during addition -->
    <p v-if="addErrorMessage" class="error-message">{{ addErrorMessage }}</p>
  </div>
</template>

<script setup>
import useTodos from '../../store/useTodos'

// Access the shared `newTodo`, `addTodo`, and `addErrorMessage` from the composable
const { newTodo, addTodo, addErrorMessage } = useTodos()

// Function to handle adding a new todo item
function handleAddTodo() {
  addTodo(); // Call the addTodo function directly from the composable
}
</script>

<style scoped>
.add-todo {
  display: flex;
  margin-bottom: 10px;
}

.error-message {
  color: #ea4335;
  font-size: 14px;
  margin-bottom: 15px;
}
</style>
