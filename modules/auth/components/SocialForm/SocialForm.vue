<script setup lang="ts">
const emit = defineEmits<{
  (e: "wants-login-with-github"): void;
}>();

const props = defineProps<{ loading: boolean }>();
</script>

<template>
  <div
    class="flex flex-col gap-2 justify-center items-center rounded p-6"
  >
    <h2 class="font-[Inter] text-gray-300 font-regular">
      Entre com sua conta.
    </h2>
    <Button
      :loading="props.loading"
      label="Continuar com o Github"
      icon="pi pi-github"
      icon-pos="right"
      @click="() => emit('wants-login-with-github')"
    />
  </div>
</template>
