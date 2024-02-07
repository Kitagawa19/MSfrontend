<template>
  <div class="Kiwi">
    <NuxtLayout />
    <NuxtPage />
  </div>
</template>
<style>
.Kiwi {
  font-family: "Kiwi Maru", serif;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
<script lang="ts" setup>
import "~/assets/css/default.css";
</script>
