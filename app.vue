<script setup lang="ts">
const { pollPendingRequests } = await usePact();

onMounted(() => {
  pollPendingRequests();
});
</script>

<template>
  <div class="relative flex flex-col items-center justify-start">
    <NavBar />
    <NuxtPage />
    <AppAlerts />
  </div>
</template>

<style>
:root {
  --primary-color: #0071fe;
  --error-color: #f23648;
  --error-bg-color: #fddfe2;
  --success-color: #21a67a;
  --success-bg-color: #e0eee4;
}
</style>
