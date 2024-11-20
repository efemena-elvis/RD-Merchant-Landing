<template>
  <div
    class="bg-foreground text-background pt-[71px] pb-[119px] scroll-mt-20"
    id="payments"
  >
    <div class="container">
      <div class="space-y-6 max-w-[835px]">
        <h1
          class="text-[48px] leading-[66px] font-semi-bold font-roobert-semibold"
        >
          Create Custom Payment Experiences with Our Comprehensive APIs
        </h1>
        <p class="text-xl text-muted-foreground">
          Our well detailed, well-documented APIs enable you to create your
          financial solutions serving hundreds of thousands of users.
        </p>
      </div>
      <div
        class="mt-[70px] grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-[50px]"
      >
        <div
          class="space-y-[70px]"
          v-for="option in payment_options"
          :key="option.title"
        >
          <div
            class="grid place-items-center size-[70px] rounded-full bg-background"
          >
            <component :is="option.icon" />
          </div>
          <div class="space-y-2">
            <h3 class="font-roobert-semibold font-semibold text-2xl">
              {{ option.title }}
            </h3>
            <p class="text-xl text-muted-foreground">
              {{ option.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import FileIcon from "@/assets/svgs/file.svg";
import FlowIcon from "@/assets/svgs/flow.svg";
import WalletIcon from "@/assets/svgs/wallet.svg";

const payment_options = ref([
  {
    title: "Access transaction data",
    description:
      "Retrieve and manage all your transaction and customer information effortlessly.",
    icon: markRaw(FileIcon),
  },
  {
    title: "Seamlessly accept payment",
    description: "Easily integrate payment solutions into your app or website.",
    icon: markRaw(WalletIcon),
  },
  {
    title: "Multiple payment option",
    description: "More than one payment option for your customers",
    icon: markRaw(FlowIcon),
  },
]);
</script>
