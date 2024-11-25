<template>
  <div class="bg-[#003069] text-background py-12 relative">
    <div class="container space-y-[60px] md:space-y-[90px] relative z-10">
      <PrismicRichText
        :field="slice.primary.title"
        class="heading max-w-[479px] mx-auto text-center"
      />

      <div
        class="grid grid-cols-[repeat(auto-fit,_minmax(297px,_1fr))] gap-y-[65px] gap-x-[115px]"
      >
        <div
          v-for="option in slice.primary.options ?? []"
          :key="option.title ?? 'key'"
          class="space-y-[39px]"
        >
          <div
            class="grid place-items-center size-[70px] rounded-full bg-background"
          >
            <PrismicImage
              :field="option.icon"
              v-if="option.icon.url"
              class="max-w-full max-h-full"
            />
            <CardIcon v-else />
          </div>
          <div class="space-y-2 relative z-10">
            <h3 class="text-2xl font-roobert-medium font-medium">
              {{ option.title }}
            </h3>
            <p class="text-[20px] leading-[28px] text-background/80">
              {{ option.subtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <NuxtImg
      class="absolute hidden sm:block left-0 w-full right-0 bottom-0 h-full"
      src="/images/grouped-arc.png"
    />
  </div>
</template>

<script setup lang="ts">
import type { Content } from "@prismicio/client";
import CardIcon from "@/assets/svgs/card.svg";

defineProps(
  getSliceComponentProps<Content.PaymentMethodsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>
