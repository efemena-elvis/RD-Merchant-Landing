<template>
  <div
    class="grid md:grid-cols-[auto_1fr] gap-10 items-center py-[120px] container !pr-0"
  >
    <div class="md:max-w-[508px] text-center md:text-left">
      <PrismicRichText :field="slice.primary.title" class="heading" />

      <p class="text-muted-foreground font-light text-xl mt-6">
        {{ slice.primary.subtitle }}
      </p>
      <div
        class="flex gap-x-4 justify-center md:justify-start items-center mt-10"
      >
        <NuxtLink :to="asLink(slice.primary.get_started_link) ?? '/'">
          <Button> {{ slice.primary.get_started_link.text }} </Button>
        </NuxtLink>
      </div>
    </div>
    <div class="grid place-items-center sm:min-w-[400px]">
      <PrismicImage
        :field="slice.primary.hero_image"
        v-if="slice.primary.hero_image.url"
      />
      <NuxtImg
        v-else
        src="/images/Redstone-Dashboard.png"
        class="h-full min-w-full object-contain"
      >
      </NuxtImg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { asLink, type Content } from "@prismicio/client";
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
