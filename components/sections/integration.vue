<template>
  <div class="bg-[#F5F6F7] py-12 scroll-mt-[120px]" id="developers">
    <div class="container grid md:grid-cols-[1fr_1fr] gap-[74px] items-center">
      <div>
        <h1
          class="text-[38px] md:text-[48px] leading-[46px] md:leading-[56px] font-roobert-semibold font-semibold"
        >
          Integrate Redstone into Your
          <span class="text-[#24ACEE]">Business</span> Ecosystem.
        </h1>
        <p class="text-[#696F6E] text-xl mt-[24px] mb-[32px]">
          Our flexible API allows for seamless integration with your existing
          systems.
        </p>
        <Button :variant="'secondary'"> View documentaion </Button>
      </div>
      <div class="aspect-[1.42]">
        <NuxtImg
          class="w-full h-full object-contain"
          src="/images/API-code.png"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Button from "../shared/button.vue";
</script>
