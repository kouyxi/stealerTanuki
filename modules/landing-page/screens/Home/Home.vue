<script setup lang="ts">
import MainContent from "~/components/MainContent/MainContent.vue";
import Header from "../../components/Header/Header.vue";
import Hero from "../../components/Hero/Hero.vue";
</script>

<template>
  <MainContent>
    <template #header>
      <Header />
    </template>
    <template #content>
      <Hero />
    </template>
  </MainContent>
</template>
