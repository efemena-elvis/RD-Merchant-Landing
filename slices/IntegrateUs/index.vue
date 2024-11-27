<template>
  <div class="bg-[#F5F6F7] py-12 scroll-mt-[120px]" id="developers">
    <div class="container grid md:grid-cols-[1fr_1fr] gap-[74px] items-center">
      <div>
        <PrismicRichText :field="slice.primary.title" class="heading" />

        <p class="text-[#696F6E] text-xl mt-[24px] mb-[32px]">
          {{ slice.primary.subtitle }}
        </p>
        <PrismicLink :field="slice.primary.documentation_link">
          <Button :variant="'secondary'">
            {{ slice.primary.documentation_link.text }}
          </Button>
        </PrismicLink>
      </div>
      <div class="aspect-[1.42]">
        <PrismicImage
          :field="slice.primary.image"
          v-if="slice.primary.image.url"
          class="w-full h-full object-contain"
        />
        <NuxtImg
          v-else
          class="w-full h-full object-contain"
          src="/images/API-code.png"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Content } from "@prismicio/client";
import Button from "@/components/shared/button.vue";
defineProps(
  getSliceComponentProps<Content.IntegrateUsSlice>([
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
