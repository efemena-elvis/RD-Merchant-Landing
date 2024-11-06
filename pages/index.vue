<template>
  <div>
    <Hero />
    <SeamlessPayment />
    <CustomPayments />
    <PaymentMethods />
    <Features />
    <Integration />
    <Onboard />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Hero from "@/components/sections/hero.vue";
import CustomPayments from "@/components/sections/custom-payments.vue";
import SeamlessPayment from "@/components/sections/seamless-payment.vue";
import PaymentMethods from "@/components/sections/payment-methods.vue";
import Features from "@/components/sections/features.vue";
import Integration from "@/components/sections/integration.vue";
import Onboard from "@/components/sections/onboard.vue";
import Footer from "@/components/sections/footer.vue";

useSeoMeta({
  title: "Payment platform for businesses",
});
</script>
