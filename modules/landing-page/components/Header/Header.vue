<script setup lang="ts">

</script>

<template>
  <header class="w-full shadow shadow-white">
    <nav class="px-4 lg:px-6 py-2.5">
      <div
        class="flex justify-content md:justify-between items-center mx-auto max-w-screen-xl"
      >
        <div class="flex items-center">
          <NuxtLink to="/">
            <Logo />
          </NuxtLink>
        </div>
        <div class="hidden md:flex">
          <Button
            label="Continuar como Creator"
            icon-pos="right"
            icon="pi pi-arrow-right"
          />
        </div>
      </div>
    </nav>
  </header>
</template>
