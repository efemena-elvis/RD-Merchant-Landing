<template>
  <div>
    <div class="fixed left-0 right-0 bg-background z-50">
      <Navigation />
    </div>
    <div class="pt-20">
      <NuxtPage />
    </div>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  titleTemplate: "Redstone | %s",
});
</script>
