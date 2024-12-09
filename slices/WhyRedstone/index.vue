<template>
  <div class="bg-background py-[160px] scroll-mt-[70px]" id="why-redstone">
    <div
      class="container flex flex-col lg:flex-row gap-[69px] lg:gap-[59px] md:items-stretch md:justify-between"
    >
      <div class="space-y-[32px] max-w-[297px] order-2 lg:order-1">
        <div
          class="size-[70px] rounded-full bg-[#E5EDEB] grid place-items-center ring-2 ring-[#D5DDDC]"
        >
          <PrismicImage
            v-if="slice.primary?.options?.[0]?.icon?.url"
            :field="slice.primary?.options[0]?.icon"
          />
          <GuardIcon v-else />
        </div>
        <div class="space-y-[24px]">
          <h4
            class="font-roobert-medium font-medium text-[32px] leading-[40px]"
          >
            {{ slice.primary?.options?.[0]?.title }}
          </h4>
          <p class="text-xl text-[#696F6E]">
            {{ slice.primary?.options?.[0]?.subtitle }}
          </p>
        </div>
      </div>
      <div
        class="p-6 rounded-3xl bg-foreground relative lg:max-w-[360px] order-1 lg:order-2"
      >
        <div class="space-y-[32px]">
          <PrismicRichText
            :field="slice.primary.title"
            class="heading text-background"
          />

          <p class="text-[#D5DDDC] text-[20px] lg:text-[24px] leading-[32px]">
            {{ slice.primary.subtitle }}
          </p>
        </div>
        <NuxtImg
          class="absolute hidden lg:block w-full right-0 bottom-0"
          src="/images/curve.png"
        />
      </div>
      <div class="space-y-[69px] lg:space-y-[147px] order-3">
        <div
          class="space-y-[32px] max-w-[297px]"
          v-for="option in slice.primary.options?.slice(1, 3)"
        >
          <div
            class="size-[70px] rounded-full bg-[#E5EDEB] grid place-items-center ring-2 ring-[#D5DDDC]"
          >
            <PrismicImage :field="option.icon" v-if="option.icon.url" />
            <GuardIcon v-else />
          </div>
          <div class="space-y-[24px]">
            <h4
              class="font-roobert-medium font-medium text-[32px] leading-[40px]"
            >
              {{ option.title }}
            </h4>
            <p class="text-xl text-[#696F6E]">
              {{ option.subtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Content } from "@prismicio/client";
import GuardIcon from "@/assets/svgs/guard.svg";
defineProps(
  getSliceComponentProps<Content.WhyRedstoneSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>
