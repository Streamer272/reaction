<template>
  <div
    :data-state="state"
    :data-error="error"
    class="w-full h-full flex items-center justify-center flex-col group data-[state=false]:bg-primary data-[state=true]:bg-accent data-[error=true]:!bg-error"
  >
    <p v-if="error" class="text-on-accent text-xl">You pressed too early</p>
    <p
      v-else-if="!captured"
      class="group-data-[state=false]:text-on-primary group-data-[state=true]:text-on-accent text-xl"
    >
      When the background turns green, press
      <code class="font-dm-bold">Space</code>
    </p>
    <p v-else class="text-on-accent text-xl">You took {{ captured }} ms</p>

    <p
      class="fixed bottom-4 right-8 group-data-[error=true]:!text-on-accent group-data-[state=false]:text-on-primary group-data-[state=true]:text-on-accent text-lg"
    >
      Press <code class="font-dm-bold">R</code> to restart
    </p>

    <a
      href="https://github.com/Streamer272/reaction"
      target="_blank"
      class="fixed bottom-4 left-6 text-xl group-data-[error=true]:!text-on-accent group-data-[state=false]:text-on-primary group-data-[state=true]:text-on-accent animate-bye active:opacity-0"
    >
      repo
    </a>
  </div>
</template>

<style scoped>
.animate-bye:active {
  animation: bye 400ms ease-in-out;
}

@keyframes bye {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

let start = Date.now();
let time = Math.floor(Math.random() * 5_000) + 1_000;
const state = ref(false);
const error = ref(false);
const captured = ref();
let timeoutId: number | undefined;

onMounted(() => {
  timeoutId = setTimeout(() => {
    state.value = true;
  }, time);

  document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && !captured.value) {
      if (state.value && !error.value) {
        captured.value = Date.now() - start - time;
      } else {
        error.value = true;
      }
    } else if (e.code === "KeyR") {
      start = Date.now();
      time = Math.floor(Math.random() * 5_000) + 1_000;
      state.value = false;
      error.value = false;
      captured.value = undefined;

      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        state.value = true;
      }, time);
    }
  });
});
</script>
