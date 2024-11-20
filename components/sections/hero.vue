<template>
  <div class="grid md:grid-cols-[auto_1fr] gap-10 items-center py-16 container">
    <div class="md:max-w-[508px] text-center md:text-left">
      <h1
        class="text-[48px] leading-[58px] font-semibold font-roobert-semibold"
      >
        Simplified Payments For Your Business
      </h1>
      <p class="text-muted-foreground font-light text-xl mt-6">
        RedStone makes payment collection and settlement simple and reliable.
      </p>
      <div
        class="flex gap-x-4 justify-center md:justify-start items-center mt-10"
      >
        <Button> Get started </Button>
      </div>
    </div>
    <div class="grid place-items-center sm:min-w-[400px]">
      <NuxtImg
        src="/images/Redstone-Dashboard.png"
        class="h-full min-w-full object-contain"
      >
      </NuxtImg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "@/components/shared/button.vue";
</script>
