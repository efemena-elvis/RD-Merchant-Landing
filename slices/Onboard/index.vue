<template>
  <div class="bg-background py-[100px] md:pt-[170px] md:pb-[50px]">
    <div class="container">
      <div
        class="bg-foreground text-background text-center px-[30px] md:px-[50px] py-[31px] md:py-[41px] rounded-3xl relative"
      >
        <PrismicRichText
          :field="slice.primary.title"
          class="heading max-w-[587px] mx-auto"
        />

        <p
          class="text-[#D9F1FD] text-xl mt-[24px] mb-[40px] max-w-[815px] mx-auto"
        >
          {{ slice.primary.subtitle }}
        </p>
        <PrismicLink
          :field="slice.primary.onboarding_link"
          class="mx-auto !block"
        >
          <Button> {{ slice.primary.onboarding_link.text }} </Button>
        </PrismicLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Content, asLink } from "@prismicio/client";
import Button from "@/components/shared/button.vue";

defineProps(
  getSliceComponentProps<Content.OnboardSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>
