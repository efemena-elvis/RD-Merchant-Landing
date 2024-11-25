<template>
  <SliceZone
    :slices="data?.data.slices ?? []"
    wrapper="main"
    :components="components"
  />

  <!-- <Hero />
    <SeamlessPayment />
    <BusinessPayment />
    <CustomPayments />
    <PaymentMethods />
    <Features />
    <Integration />
    <Onboard /> -->
</template>

<script lang="ts" setup>
import Hero from "@/components/sections/hero.vue";
import CustomPayments from "@/components/sections/custom-payments.vue";
import SeamlessPayment from "@/components/sections/seamless-payment.vue";
import BusinessPayment from "@/components/sections/business-payment.vue";
import PaymentMethods from "@/components/sections/payment-methods.vue";
import Features from "@/components/sections/features.vue";
import Integration from "@/components/sections/integration.vue";
import Onboard from "@/components/sections/onboard.vue";
import { components } from "@/slices";

const { client } = usePrismic();
const { data } = await useAsyncData("home", () => {
  return client.getByUID("page", "homepage");
});

useSeoMeta({
  title: () => data.value?.data?.title ?? "",
});
</script>
