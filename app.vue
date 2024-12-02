<template>
  <div>
    <NuxtLoadingIndicator />
    <div class="fixed left-0 right-0 bg-background z-50">
      <Navigation />
    </div>
    <div class="pt-20">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Footer from "@/components/sections/footer.vue";

const { client } = usePrismic();
const { data } = await useAsyncData("home", () => {
  return client.getByUID("page", "homepage");
});

useHead({
  link: [
    {
      id: "canonical",
      rel: "canonical",
      href: "https://redstonepgs.com",
    },
  ],
});

useSeoMeta({
  title: () => data.value?.data?.title ?? "",
  description: () => data.value?.data?.meta_description ?? "",
  ogTitle: () => data.value?.data?.title ?? "",
  ogDescription: () => data.value?.data?.meta_description ?? "",
  keywords: () => data.value?.data?.meta_keywords ?? "",
  ogSiteName: "Redstone",
  ogUrl: () => "https://redstonepgs.com",
  ogImage: () => data.value?.data?.og_image?.url ?? "",
  ogImageSecureUrl: () => data.value?.data?.og_image?.url ?? "",
  ogImageAlt: "Redstone",
  ogImageWidth: 300,
  ogImageHeight: 300,
  ogImageType: "image/png",
  twitterImage: () => data.value?.data?.og_image?.url ?? "",
  twitterImageAlt: "Redstone",
  twitterCard: "summary",
});
</script>
