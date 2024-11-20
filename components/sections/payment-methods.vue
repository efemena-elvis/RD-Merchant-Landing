<template>
  <div class="bg-[#003069] text-background py-12 relative">
    <div class="container space-y-[60px] md:space-y-[90px] relative z-10">
      <h1
        class="text-[38px] leading-[56px] md:text-[48px] max-w-[479px] mx-auto md:leading-[66px] text-center font-roobert-semibold font-semibold"
      >
        How your customers pay you
      </h1>
      <div
        class="grid grid-cols-[repeat(auto-fit,_minmax(297px,_1fr))] gap-y-[65px] gap-x-[115px]"
      >
        <div
          v-for="option in payment_methods"
          :key="option.title"
          class="space-y-[39px]"
        >
          <div
            class="grid place-items-center size-[70px] rounded-full bg-background"
          >
            <component :is="option.icon" />
          </div>
          <div class="space-y-2 relative z-10">
            <h3 class="text-2xl font-roobert-medium font-medium">
              {{ option.title }}
            </h3>
            <p class="text-[20px] leading-[28px] text-background/80">
              {{ option.description }}
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

<script lang="ts" setup>
import CardIcon from "@/assets/svgs/card.svg";
import MoneyIcon from "@/assets/svgs/money.svg";
import BankIcon from "@/assets/svgs/bank.svg";

const payment_methods = ref([
  {
    title: "Card",
    description: "Seamless card payments for a smooth customer experience.",
    icon: markRaw(CardIcon),
  },
  {
    title: "Mobile Money",
    description: "Secure and convenient payments using mobile wallets.",
    icon: markRaw(MoneyIcon),
  },
  {
    title: "Bank Transfer",
    description: "Reliable and traditional payment method.",
    icon: markRaw(BankIcon),
  },
]);
</script>
