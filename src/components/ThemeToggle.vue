<template>
    <div class="theme-toggle">
        <button @click="toggleTheme">
            {{ theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode' }}
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const theme = ref(localStorage.getItem('theme') || 'light')

function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme.value)
    localStorage.setItem('theme', theme.value)
}
</script>

<style scoped>
/* Add styles for the toggle button */
.theme-toggle button {
    padding: 10px 15px;
    background-color: #4285f4;
    color: #ffffff;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 4px;
    transition: background-color 0.3s;
    margin-top: 10px;
}

.theme-toggle button:hover {
    background-color: #3367d6;
}
</style>