<template>
  <div
    class="grid md:grid-cols-[auto_1fr] gap-10 items-center py-[120px] container !pr-0"
  >
    <div class="md:max-w-[508px] text-center md:text-left">
      <h1
        class="text-[48px] leading-[58px] font-semibold font-roobert-semibold"
      >
        {{ slice.primary.title }}
      </h1>
      <p class="text-muted-foreground font-light text-xl mt-6">
        {{ slice.primary.subtitle }}
      </p>
      <div
        class="flex gap-x-4 justify-center md:justify-start items-center mt-10"
      >
        <Button> Get started </Button>
      </div>
    </div>
    <div class="grid place-items-center sm:min-w-[400px]">
      <NuxtImg
        v-if="slice.primary.hero_image.url"
        :src="slice.primary.hero_image.url"
        class="h-full min-w-full object-contain"
      >
      </NuxtImg>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Content } from "@prismicio/client";
import Button from "@/components/shared/button.vue";

defineProps(
  getSliceComponentProps<Content.HeroSectionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>
