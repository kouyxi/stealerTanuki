<script setup lang="ts">
import MainContent from "~/components/MainContent/MainContent.vue";
import Header from "../../components/Header/Header.vue";
import Hero from "../../components/Hero/Hero.vue";

const router = useRouter();

const handleLogin = () => {
  router.push("/auth/login");
};
</script>

<template>
  <MainContent>
    <template #header>
      <Header @wants-be-creator="handleLogin" />
    </template>
    <template #content @wants-be-creator="handleLogin">
      <Hero />
    </template>
  </MainContent>
</template>
