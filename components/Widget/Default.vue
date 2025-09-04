<script setup lang="ts">
const props = defineProps<{
  title?: string;
  subtitle?: string;
}>();
</script>

<template>
  <div class="rounded-lg p-5 bg-white overflow-inherit">
    <div class="flexjustify-between items-center" v-if="props.title">
      <div class="flex-flex-col gap-1">
        <h3 class="font-[Inter] text-lg font-bold text-left text-gray-700">
          {{ props.title }}
        </h3>
        <p
          class="font-[Inter] text-sm text-gray-500 text-left"
          v-if="props.subtitle"
        >
          {{ props.subtitle }}
        </p>
      </div>
      <slot name="header-action"></slot>
    </div>

    <div class="py-2">
      <slot />
    </div>
  </div>
</template>
