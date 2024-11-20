<template>
  <header class="h-[70px] flex items-center justify-between container">
    <NuxtLink
      class="flex items-center gap-x-px text-secondary text-[24px] leading-5"
      to="/"
    >
      <RedStoneIcon />
      Redstone
    </NuxtLink>
    <nav class="hidden md:flex justify-end gap-x-[32px] items-center">
      <NuxtLink
        to="/#payments"
        class="text-[14px] leading-[20px] text-[#525857] hover:text-primary transition-colors"
      >
        Payments
      </NuxtLink>
      <NuxtLink
        to="/#why-redstone"
        class="text-[14px] leading-[20px] text-[#525857] hover:text-primary transition-colors"
      >
        Why Redstone
      </NuxtLink>
      <NuxtLink
        to="/#developers"
        class="text-[14px] leading-[20px] text-[#525857] hover:text-primary transition-colors"
      >
        Developers
      </NuxtLink>

      <NuxtLink to="/">
        <Button :variant="'outline'" class="!h-[36px]"> Login </Button>
      </NuxtLink>
    </nav>
    <Button :variant="'ghost'" :size="'icon'" class="md:hidden">
      <MenuIcon />
    </Button>
  </header>
</template>

<script lang="ts" setup>
import { cn } from "@/lib/utils";
import RedStoneIcon from "@/assets/svgs/redstone.svg";
import Button from "@/components/shared/button.vue";
import MenuIcon from "@/assets/svgs/menu.svg";

const route = useRoute();
const currentHash = computed(() => route.hash);
</script>
