<template>
  <div class="bg-background pt-12">
    <div class="container relative">
      <NuxtLink
        class="flex items-center gap-x-px text-secondary text-[24px] leading-5"
        to="/"
      >
        <RedStoneIcon />
        Redstone
      </NuxtLink>
      <div
        class="grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-[50px] my-10"
      >
        <div class="space-y-6">
          <p class="text-muted-foreground">support@redstonepgs.com</p>
          <div class="flex items-center gap-x-4">
            <div
              class="size-[48px] hover:bg-muted/50 cursor-pointer transition-colors rounded-full border grid place-items-center"
            >
              <InstagramIcon />
            </div>
            <div
              class="size-[48px] hover:bg-muted/50 cursor-pointer transition-colors rounded-full border grid place-items-center"
            >
              <FacebookIcon />
            </div>
            <div
              class="size-[48px] hover:bg-muted/50 cursor-pointer transition-colors rounded-full border grid place-items-center"
            >
              <TwitterIcon />
            </div>
            <div
              class="size-[48px] hover:bg-muted/50 cursor-pointer transition-colors rounded-full border grid place-items-center"
            >
              <LinkedinIcon />
            </div>
          </div>
        </div>
        <div class="space-y-6">
          <NuxtLink
            class="text-muted-foreground block hover:text-primary transition-colors hover:underline"
            to="/"
          >
            Privacy poilcy
          </NuxtLink>
          <NuxtLink
            class="text-muted-foreground block hover:text-primary transition-colors hover:underline"
            to="/"
          >
            Terms of use
          </NuxtLink>
        </div>
        <div class="space-y-6">
          <p class="text-muted-foreground">Contact</p>
          <p class="text-muted-foreground">
            4 Bishops Rd, Kabulonga Lusaka, Zambia
          </p>
        </div>
      </div>
      <NuxtImg src="/images/RedStone.png" class="w-full" />
    </div>
    <div class="px-6 py-4 flex justify-center items-center text-[#C1C9C8]">
      <div>Copyright {{ new Date().getFullYear() }}. Red Stone Zambia Ltd.</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import RedStoneIcon from "@/assets/svgs/redstone.svg";
import FacebookIcon from "@/assets/svgs/facebook.svg";
import TwitterIcon from "@/assets/svgs/twitter.svg";
import LinkedinIcon from "@/assets/svgs/linkedin.svg";
import InstagramIcon from "@/assets/svgs/instagram.svg";
import Button from "../shared/button.vue";
</script>
