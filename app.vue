<template>
  <div>
    <NuxtLoadingIndicator />
    <div class="fixed left-0 right-0 bg-background z-50">
      <Navigation />
    </div>
    <div class="pt-20">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Footer from "@/components/sections/footer.vue";
useSeoMeta({
  titleTemplate: "Redstone | %s",
});
</script>
