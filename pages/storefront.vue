<template>
  <div>
    <div
      class="flex justify-between flex-wrap gap-10 items-center py-[120px] container"
    >
      <div class="text-center md:text-left max-w-[500px]">
        <h1
          class="text-[40px] leading-[48px] md:text-[48px] md:leading-[66px] font-roobert-semibold font-semibold"
        >
          Launch your online store for free
        </h1>

        <p class="text-muted-foreground font-light text-xl mt-6">
          Easily build your store, attract customers, process payments, and
          scale your business
        </p>

        <NuxtLink
          :to="'https://merchant.redstonepgs.com/create-account'"
          external
          target="_blank"
          class="block mt-8"
        >
          <SharedButton> Sign up for free </SharedButton>
        </NuxtLink>
      </div>
      <div class="w-full sm:w-[472px] aspect-square">
        <NuxtImg src="/images/shop.png" class="h-full w-full object-contain">
        </NuxtImg>
      </div>
    </div>

    <div class="container py-[100px]">
      <div class="grid md:grid-cols-2 gap-10">
        <div
          class="bg-[#F1F7F6] rounded-lg p-6 grid sm:grid-cols-[288px,_1fr] gap-6 items-center"
        >
          <div class="space-y-6">
            <h3
              class="font-roobert-semibold font-semibold text-2xl text-[#011A27]"
            >
              Showcase your product
            </h3>
            <p class="text-[#525857] text-xl">
              Organize your products into categories for easy browsing and
              access by customers around the globe.
            </p>
          </div>
          <div class="grid place-items-center h-full">
            <NuxtImg
              src="/images/shopping-bag.png"
              alt="shopping-bag"
              class="object-contain sm:w-[80%] sm:h-[80%]"
            />
          </div>
        </div>
        <div
          class="bg-[#F1F7F6] rounded-lg p-6 grid sm:grid-cols-[288px,_1fr] gap-6 items-center"
        >
          <div class="space-y-6">
            <h3
              class="font-roobert-semibold font-semibold text-2xl text-[#011A27]"
            >
              Accept payment anytime
            </h3>
            <p class="text-[#525857] text-xl">
              Offers a variety of payment methods, including cards and mobile
              money.
            </p>
          </div>
          <div class="grid place-items-center h-full">
            <NuxtImg
              src="/images/payment.png"
              alt="shopping-bag"
              class="object-contain sm:w-[80%] sm:h-[80%]"
            />
          </div>
        </div>
        <div
          class="bg-[#F1F7F6] rounded-lg p-6 grid sm:grid-cols-[400px,_1fr] gap-6 items-center col-span-full"
        >
          <div class="space-y-6">
            <h3
              class="font-roobert-semibold font-semibold text-2xl text-[#011A27]"
            >
              Fully customize your website
            </h3>
            <p class="text-[#525857] text-xl">
              Enjoy flexibility in design and tailor your store to reflect your
              brand’s unique style.
            </p>
          </div>
          <div class="grid place-items-center h-full">
            <NuxtImg
              src="/images/custom-shop.png"
              alt="shopping-bag"
              class="object-contain sm:w-full sm:h-[80%] object-right"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="container py-[100px]">
      <h3 class="text-3xl md:text-[48px] md:leading-[72px] max-w-[890px]">
        Create your free account and proceed to set up your storefront  in three
        steps.
      </h3>
      <div
        class="grid grid-cols-[repeat(auto-fit,_minmax(230px,_1fr))] gap-12 mt-[70px]"
      >
        <div class="space-y-12">
          <div
            class="grid place-items-center size-[40px] rounded-full bg-[#D5DDDC]"
          >
            1
          </div>
          <MailIcon />
          <div class="space-y-4">
            <h3
              class="font-roobert-semibold font-semibold text-2xl text-[#011A27]"
            >
              Showcase your product
            </h3>
            <p class="text-[#525857] text-xl">
              Organize your products into categories for easy browsing and
              access by customers around the globe.
            </p>
          </div>
        </div>

        <div class="space-y-12">
          <div
            class="grid place-items-center size-[40px] rounded-full bg-[#D5DDDC]"
          >
            2
          </div>
          <ShopIcon />
          <div class="space-y-4">
            <h3
              class="font-roobert-semibold font-semibold text-2xl text-[#011A27]"
            >
              Add product
            </h3>
            <p class="text-[#525857] text-xl">
              List all product and services with details, organize items into
              categories to enhance user navigation
            </p>
          </div>
        </div>

        <div class="space-y-12">
          <div
            class="grid place-items-center size-[40px] rounded-full bg-[#D5DDDC]"
          >
            3
          </div>
          <NoteIcon />
          <div class="space-y-4">
            <h3
              class="font-roobert-semibold font-semibold text-2xl text-[#011A27]"
            >
              Set up payment
            </h3>
            <p class="text-[#525857] text-xl">
              Choose to either collect payment from your customers via mobile
              money or card
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="w-full aspect-[3.3]">
        <NuxtImg
          src="/images/attendant.png"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <div class="bg-background py-[100px] md:pt-[170px] md:pb-[50px]">
      <div class="container">
        <div
          class="bg-[#011A27] text-background text-center px-[30px] md:px-[50px] py-[31px] md:py-[41px] rounded-3xl relative"
        >
          <h1
            class="text-[40px] leading-[48px] md:text-[48px] md:leading-[66px] font-roobert-semibold font-semibold max-w-[787px] mx-auto"
          >
            Ready to start selling online?
          </h1>

          <p
            class="text-[#D9F1FD] text-xl mt-[24px] mb-[40px] max-w-[815px] mx-auto"
          >
            Our easy to use platform allows you to start selling under 5minutes
          </p>
          <NuxtLink
            external
            target="_blank"
            to="https://merchant.redstonepgs.com/storefront"
          >
            <SharedButton> Get started </SharedButton>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MailIcon from "@/assets/svgs/mail.svg";
import ShopIcon from "@/assets/svgs/shop.svg";
import NoteIcon from "@/assets/svgs/note.svg";
</script>
