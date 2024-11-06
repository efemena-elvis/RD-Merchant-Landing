<template>
  <div class="grid md:grid-cols-[auto_1fr] gap-10 items-cente py-16 container">
    <div class="max-w-[620px] xl:max-w-[720px] text-center md:text-left">
      <h1
        class="text-[42px] leading-[57px] md:text-[62px] md:leading-[77px] xl:text-[72px] xl:leading-[87px] font-roobert-bold"
      >
        One payment platform for your business transactions
      </h1>
      <p class="text-muted-foreground font-light text-xl xl:text-2xl mt-4">
        Nowcash makes payment collection and settlement  simple and reliable.
      </p>
      <div
        class="flex gap-x-4 justify-center md:justify-start items-center mt-10"
      >
        <Button> Get started </Button>
        <Button :variant="'outline'"> Contact sales </Button>
      </div>
    </div>
    <div class="grid place-items-center max-w-full sm:min-w-[350px]">
      <NuxtImg
        src="/images/Money-Jigsaw.svg"
        class="h-full min-w-full object-contain"
      >
      </NuxtImg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "@/components/shared/button.vue";
</script>
