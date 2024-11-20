<template>
  <div>
    <Hero />
    <SeamlessPayment />
    <BusinessPayment />
    <CustomPayments />
    <PaymentMethods />
    <Features />
    <Integration />
    <Onboard />
  </div>
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

useSeoMeta({
  title: "Payment platform for businesses",
});
</script>
