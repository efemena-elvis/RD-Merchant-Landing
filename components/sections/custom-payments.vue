<template>
  <div class="bg-background py-[100px] md:py-[170px]">
    <div class="container">
      <div
        class="bg-foreground text-background px-[30px] md:px-[50px] py-[31px] md:py-[41px] rounded-3xl grid md:grid-cols-[361px_1fr] gap-[70px] relative"
      >
        <h1
          class="text-[40px] leading-[56px] md:text-[48px] md:leading-[66px] font-roobert-semibold font-semibold"
        >
          Customise your <span class="text-[#4ABFF9]">payments</span>
        </h1>
        <div
          class="grid grid-cols-[repeat(auto-fit,_minmax(269px,_1fr))] gap-[70px]"
        >
          <div
            class="space-y-2 relative z-10"
            v-for="option in payment_options"
            :key="option.title"
          >
            <h3 class="text-2xl font-roobert-medium font-medium">
              {{ option.title }}
            </h3>
            <p class="text-[20px] leading-[28px] text-muted-foreground">
              {{ option.description }}
            </p>
          </div>
        </div>
        <NuxtImg src="/images/Cogs.png" class="absolute right-0 bottom-0" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const payment_options = ref([
  {
    title: "Web SDKs",
    description:
      "Flexible web payment solutions for a seamless customer experience.",
  },
  {
    title: "API integration",
    description:
      "Robust API for customizable payment links and checkout pages.",
  },
  {
    title: "Mobile SDKs",
    description:
      "Comprehensive payment options for cards, bank transfers, and mobile money.",
  },
]);
</script>
