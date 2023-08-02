<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div class="relative flex flex-col items-center justify-start w-full">
    <NavBar />
    <ProjectsForm class="mt-24 w-full" />
  </div>
</template>
