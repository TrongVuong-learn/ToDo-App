<template>
  <!-- Modal only appears when showModal is true -->
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <!-- Close button to cancel the editing process -->
      <span class="close" @click="cancelEdit">×</span>
      <!-- Input field for updating the text of the todo item -->
      <input v-model="editingTodo.text" @keyup.enter="updateTodo" placeholder="Edit todo" />
      <!-- Button to confirm the update of the todo item -->
      <button @click="updateTodo">Update</button>
      <!-- Button to cancel the editing process -->
      <button @click="cancelEdit">Cancel</button>
      <!-- Display an error message if there is a validation error during the update -->
      <p v-if="updateErrorMessage" class="error-message">{{ updateErrorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import useTodos from '../../store/useTodos'

// Destructure the necessary properties and methods from the useTodos composable
const { showModal, editingTodo, updateTodo, cancelEdit, updateErrorMessage } = useTodos()
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #202124;
  position: relative;
  width: 300px;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}

.modal-content input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #dadce0;
  border-radius: 4px;
  background-color: #f1f3f4;
  color: #202124;
  margin-bottom: 10px;
}

.modal-content button {
  padding: 10px 15px;
  background-color: #4285f4;
  color: #ffffff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  transition: background-color 0.3s;
  margin-right: 10px;
}

.modal-content button:hover {
  background-color: #3367d6;
}
</style>