<template>
  <SliceZone
    :slices="data?.data.slices ?? []"
    wrapper="main"
    :components="components"
  />
</template>

<script lang="ts" setup>
import { components } from "@/slices";

const { client } = usePrismic();
const { data } = await useAsyncData(
  "home",
  () => {
    return client.getByUID("page", "homepage");
  },
  {
    getCachedData: () => undefined,
  }
);

useSeoMeta({
  title: () => data.value?.data?.title ?? "",
});
</script>
