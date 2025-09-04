<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    loading: boolean;
    amount?: number;
  }>(),
  {
    loading: false,
    amount: 4,
  },
);
</script>

<template>
  <template v-if="props.loading">
    <div
      class="flex flex-col justify-center gap-2 bg-gray-700 rounded w-full p-5"
      v-for="loader in props.amount"
      :key="`loader-${loader}`"
    >
      <Skeleton width="8rem" height="4rem" />
    </div>
  </template>
  <slot v-else />
</template>
