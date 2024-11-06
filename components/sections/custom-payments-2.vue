<template>
  <div class="bg-[#F1FAF3] py-10">
    <div class="container payments-container">
      <div class="space-y-6">
        <h1
          class="font-roobert-bold text-[48px] leading-[52px] md:text-[64px] md:leading-[72px] font-bold"
        >
          Customise your payments
        </h1>
        <p class="text-xl text-muted-foreground">
          Effortlessly set up a preferred payment route to collect payments from
          your customers. Our documentation is well placed and easy for
          developers.
        </p>
      </div>
      <div class="border bg-background p-8 rounded-3xl">
        <div class="size-[70px] border rounded-full grid place-items-center">
          <GlobeIcon />
        </div>
        <div class="mt-[40px] space-y-3">
          <h1 class="font-roobert-bold text-[32px] leading-[39px] font-bold">
            Web SDKs
          </h1>
          <p class="text-xl text-muted-foreground">
            Create SDK solution for your web payment collection flexible for
            customers.
          </p>
        </div>
      </div>

      <div class="border bg-background p-8 rounded-3xl">
        <div class="size-[70px] border rounded-full grid place-items-center">
          <MobileIcon />
        </div>
        <div class="mt-[40px] space-y-3">
          <h1 class="font-roobert-bold text-[32px] leading-[39px] font-bold">
            Mobile SDKs
          </h1>
          <p class="text-xl text-muted-foreground">
            Access a complete suite of payment solutions for  cards, USSD, bank
            transfers, and mobile money with Mobile SDKs.
          </p>
        </div>
      </div>

      <div class="border bg-background p-8 rounded-3xl">
        <div class="size-[70px] border rounded-full grid place-items-center">
          <ApiIcon />
        </div>
        <div class="mt-[40px] space-y-3">
          <h1 class="font-roobert-bold text-[32px] leading-[39px] font-bold">
            API
          </h1>
          <p class="text-xl text-muted-foreground">
            Our robust API  allows you can set up payment links and checkout
            pages for cards, USSD, bank transfers, and mobile money payment
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import GlobeIcon from "@/assets/svgs/globe.svg";
import ApiIcon from "@/assets/svgs/api.svg";
import MobileIcon from "@/assets/svgs/mobile.svg";
</script>

<style>
.payments-container {
  display: grid;
  grid-template-columns: 100%;
  gap: 32px;
}

@media screen and (min-width: 624px) {
  .payments-container {
    grid-template-columns: repeat(auto-fit, minmax(560px, 1fr));
  }
}
</style>
