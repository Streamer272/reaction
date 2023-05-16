<template>
  <div class="flex items-center justify-center flex-col w-page h-page gap-2">
    <p class="text-blue-800">You clicked {{ count }} times</p>
    <button @click="() => count++" class="text-2xl">+</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>
