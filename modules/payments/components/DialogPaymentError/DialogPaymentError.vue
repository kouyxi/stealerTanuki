<script setup lang="ts">
const visible = defineModel<boolean>("visible");
</script>

<template>
  <Dialog
    modal
    header="Deu algum problema!"
    :style="{ width: '400px' }"
    v-model:visible="visible"
  >
    <div class="m-0 flex flex-col items-center justify-center w-full">
      <i class="pi pi-times-circle text-primary-500 text-2xl my-5"> </i>

      <p class="font-[Inter] text-gray-400 text-center my-2">
        Sentimos muito por isso! <br />
        Por favor, tente efetuar a compra novamente.
      </p>
    </div>
    <template #footer>
      <div class="flex justify-center w-full">
        <Button
          label="Voltar"
          icon="pi pi-arrow-left"
          @click="visible = false"
          autofocus
        />
      </div>
    </template>
  </Dialog>
</template>
