<template>
  <div
    class="fixed left-0 bg-white shadow-md border md:hidden top-0 bottom-0 rounded-r-[20px] pr-6 py-20 transition-all duration-300"
    :class="isMenuOpen ? 'w-[40%] translate-x-0' : 'w-[40%] -translate-x-full'"
  >
    <NuxtLink
      class="flex items-center absolute top-4 gap-x-px text-secondary text-[16px] leading-5"
      to="/"
    >
      <RedStoneIcon />
      Redstone
    </NuxtLink>
    <nav class="flex justify-center flex-col gap-[12px] mt-12">
      <NuxtLink
        v-for="(item, index) in menuList"
        :key="index"
        @click="handleMenuClick(item.label)"
        :to="item.link"
        class="text-[14px] leading-[20px] rounded-r-md p-3 hover:text-[#3ab65d] w-full transition-colors"
        :class="
          item.label === activeMenu
            ? 'bg-[#3ab65d] text-white'
            : 'bg-none text-[#1f3541]'
        "
      >
        {{ item.label }}
      </NuxtLink>

      <PrismicLink :field="data?.data.login_link" v-if="data?.data.login_link">
        <Button :variant="'outline'" class="!h-[36px]">
          {{ data.data.login_link.text }}
        </Button>
      </PrismicLink>
      <NuxtLink
        to="https://merchant.redstonepgs.com/login"
        v-else
        external
        target="_blank"
      >
        <Button
          :variant="'outline'"
          class="text-[14px] border border-[#3ab65d] rounded-r-md p-3 text-[#3ab65d] hover:text-white hover:bg-[#3ab65d] w-full transition-colors"
        >
          Login
        </Button>
      </NuxtLink>
    </nav>
  </div>
</template>

<script setup>
import { useState } from "nuxt/app";
import RedStoneIcon from "@/assets/svgs/redstone.svg";

const menuList = useState("menuList", () => [
  { label: "Payments", link: "/#payments" },
  { label: "Storefront", link: "/storefront" },
  { label: "Why Redstone", link: "/#why-redstone" },
  { label: "Developers", link: "/#developers" },
]);
const activeMenu = useState("activeMenu", () => "Payments");

defineProps({
  isMenuOpen: Boolean,
});

const emit = defineEmits(["closeMenu"]);

const handleMenuClick = (label) => {
  activeMenu.value = label;
  emit("closeMenu");
};
</script>

<style lang="scss" scoped></style>
