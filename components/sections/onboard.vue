<template>
  <div class="bg-background py-[100px] md:py-[170px]">
    <div class="container">
      <div
        class="bg-foreground text-background text-center px-[30px] md:px-[50px] py-[31px] md:py-[41px] rounded-3xl relative"
      >
        <h1
          class="text-[40px] max-w-[587px] mx-auto leading-[56px] md:text-[48px] md:leading-[66px] font-roobert-semibold font-semibold"
        >
          Ready to take your business to the next level?
        </h1>
        <p
          class="text-[#D9F1FD] text-xl mt-[24px] mb-[40px] max-w-[815px] mx-auto"
        >
          Sign up now to start accepting payments securely and efficiently. With
          our flexible solutions and reliable support, you can focus on growing
          your business.
        </p>
        <Button class="mx-auto !block"> Get started </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "../shared/button.vue";
</script>
