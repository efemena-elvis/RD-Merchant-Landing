<template>
  <div class="bg-background py-20 scroll-mt-[70px]" id="why-redstone">
    <div
      class="container flex flex-col lg:flex-row gap-[69px] lg:gap-[59px] md:items-stretch md:justify-between"
    >
      <div class="space-y-[32px] max-w-[297px] order-2 lg:order-1">
        <div
          class="size-[70px] rounded-full bg-[#E5EDEB] grid place-items-center ring-2 ring-[#D5DDDC]"
        >
          <GuardIcon />
        </div>
        <div class="space-y-[24px]">
          <h4
            class="font-roobert-medium font-medium text-[32px] leading-[40px]"
          >
            Fraud detection
          </h4>
          <p class="text-xl text-[#696F6E]">
            Advanced fraud protection to safeguard your business.
          </p>
        </div>
      </div>
      <div
        class="p-6 rounded-3xl bg-foreground relative lg:max-w-[360px] order-1 lg:order-2"
      >
        <div class="space-y-[32px]">
          <h2
            class="text-[38px] leading-[56px] lg:text-[48px] lg:leading-[66px] text-background"
          >
            Why Redstone is right for you
          </h2>
          <p class="text-[#D5DDDC] text-[20px] lg:text-[24px] leading-[32px]">
            We have become the best option for businesses just because we offer.
          </p>
        </div>
        <NuxtImg
          class="absolute hidden lg:block w-full right-0 bottom-0"
          src="/images/curve.png"
        />
      </div>
      <div class="space-y-[69px] lg:space-y-[147px] order-3">
        <div class="space-y-[32px] max-w-[297px]">
          <div
            class="size-[70px] rounded-full bg-[#E5EDEB] grid place-items-center ring-2 ring-[#D5DDDC]"
          >
            <WalletFlowIcon />
          </div>
          <div class="space-y-[24px]">
            <h4
              class="font-roobert-medium font-medium text-[32px] leading-[40px]"
            >
              Flexible settlement
            </h4>
            <p class="text-xl text-[#696F6E]">
              Real-time settlements for improved cash flow.
            </p>
          </div>
        </div>
        <div class="space-y-[32px] max-w-[297px]">
          <div
            class="size-[70px] rounded-full bg-[#E5EDEB] grid place-items-center ring-2 ring-[#D5DDDC]"
          >
            <LoopIcon />
          </div>
          <div class="space-y-[24px]">
            <h4
              class="font-roobert-medium font-medium text-[32px] leading-[40px]"
            >
              Seamless Reconciliation
            </h4>
            <p class="text-xl text-[#696F6E]">
              Effortless reconciliation for accurate tracking.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import GuardIcon from "@/assets/svgs/guard.svg";
import WalletFlowIcon from "@/assets/svgs/wallet-flow.svg";
import LoopIcon from "@/assets/svgs/loop.svg";
</script>
