<script setup lang="ts">
import Logo from "~/components/Logo/Logo.vue";
import SocialForm from "../../components/SocialForm/SocialForm.vue";

const loading = ref<boolean>(true);

const handlerLoginGithub = async () => {
  loading.value = true;
  // TODO: CALL API
};
</script>

<template>
  <section
    class="w-full h-screen flex flex-col items-center justify-center gap-5"
  >
    <Logo />
    <SocialForm
      :loading="loading"
      @wants-login-with-github="handlerLoginGithub"
    />
  </section>
</template>
