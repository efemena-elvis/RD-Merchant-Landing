<template>
  <div
    class="bg-foreground text-background pt-[71px] pb-[119px] scroll-mt-20"
    id="payments"
  >
    <div class="container">
      <div class="space-y-6 max-w-[835px]">
        <PrismicRichText :field="slice.primary.title" class="heading" />
        <p class="text-xl text-[#696F6E]">
          {{ slice.primary.subtitle }}
        </p>
      </div>
      <div
        class="mt-[70px] grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-[50px]"
      >
        <div
          class="space-y-[30px]"
          v-for="option in slice.primary.options ?? []"
          :key="option.title ?? 'key'"
        >
          <div
            class="grid place-items-center size-[70px] rounded-full bg-background"
          >
            <PrismicImage
              :field="option.icon"
              v-if="option.icon.url"
              class="max-w-full max-h-full"
            />
            <FileIcon v-else />
          </div>
          <div class="space-y-2">
            <h3 class="font-roobert-semibold font-semibold text-2xl">
              {{ option.title }}
            </h3>
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
import FileIcon from "@/assets/svgs/file.svg";

defineProps(
  getSliceComponentProps<Content.CustomPaymentsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>
