<template>
  <li :class="{ completed: todo.completed }">
    <span @click="toggleTodo(todo)">{{ todo.text }}</span>
    <button @click="editTodo(todo)" class="edit-btn">Edit</button>
    <button @click="removeTodo(todo.id)" class="remove-btn">X</button>
  </li>
</template>

<script setup>
import useTodos from '../store/useTodos'
import { defineProps } from 'vue'

const props = defineProps({
  todo: Object
})

const { toggleTodo, removeTodo, editTodo } = useTodos()
</script>

<style scoped>
/* Add styles for individual todo items */
</style>