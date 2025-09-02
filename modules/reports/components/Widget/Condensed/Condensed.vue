<script setup lang="ts">
const props = defineProps<{
  value: number | string;
  label: string;
}>();
</script>

<template>
  <div class="flex flex-1 flex-col bg-gray-200 p-5 rounded-xl">
    <span class="font-[Inter] text-4xl text-primary-400 font-bold">{{
      props.value
    }}</span>
    <p class="font-[Inter] text-lg text-gray-500">{{ props.label }}</p>
  </div>
</template>
