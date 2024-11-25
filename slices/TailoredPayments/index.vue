<template>
  <div class="py-[100px] md:py-[200px]">
    <div class="container">
      <div
        class="grid md:grid-cols-[auto,_1fr] items-center gap-[55px] lg:gap-[85px] bg-gradient-to-r from-[#F5F6F7] via-[#EBF6F9] to-[#F5F6F7] rounded-[28px] p-6 md:p-10"
      >
        <div class="size-[200px] lg:size-[334px] order-2 md:order-1 mx-auto">
          <PrismicImage
            :field="slice.primary.image"
            v-if="slice.primary.image.url"
          />
          <NuxtImg
            v-else
            src="/images/wallet.png"
            class="w-full h-full object-contain"
          />
        </div>
        <div class="space-y-8 max-w-[533px] order-1 md:order-2">
          <PrismicRichText :field="slice.primary.title" class="heading" />
          <p class="text-xl text-muted-foreground">
            {{ slice.primary.subtitle }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Content } from "@prismicio/client";
defineProps(
  getSliceComponentProps<Content.TailoredPaymentsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>
