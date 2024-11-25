<template>
  <div class="bg-gradient-to-r from-primary/10 to-[#F1FAF3] relative">
    <div class="container relative pt-12 pb-0 md:pb-12">
      <div class="space-y-[30px] md:w-[50%]">
        <PrismicRichText :field="slice.primary.title" class="heading">
        </PrismicRichText>
        <p class="text-[20px] md:mb-0 leading-[28px] text-muted-foreground">
          {{ slice.primary.subtitle }}
        </p>
      </div>
      <div
        class="md:absolute mt-10 md:mt-0 md:top-0 md:bottom-0 md:right-0 md:max-w-[300px] lg:max-w-[400px]"
      >
        <PrismicImage
          :field="slice.primary.image"
          class="w-full h-full object-center"
          v-if="slice.primary.image.url"
        />
        <NuxtImg
          src="/images/Shopping.png"
          class="w-full h-full object-center"
          v-else
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(
  getSliceComponentProps<Content.SeamlessPaymentsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<style>
.heading h1 span.colored {
  color: #4abff9;
}
</style>
