<script setup lang="ts">
import { NuxtLink } from "#components";

const { render } = useMarkdown();

const props = withDefaults(
  defineProps<{
    title: string;
    category: string;
    description: string;
    author: string;
  }>(),
  {
    title: "Indirecting Instancing Object in PHP leading to RCE",
    category: "RCE",
    description:
      "Using indirecting instancing object in PHP by GET PARAM leading to RCE",
    author: "Kouyxi",
  },
);

const description = computed(() => {
  return render(props.description);
});
</script>

<template>
  <div class="w-full flex flex-col justify-center gap-2 my-5">
    <div class="flex flex-wrap items-center gap-2">
      <h1 class="font-[Inter] text-gray-400 font-bold text-2xl md:text-3xl">
        {{ props.title }}
      </h1>
      <Chip class="text-sm" :label="props.category" icon="pi pi-bolt" />
    </div>
    <div
      v-html="props.description"
      class="font-[Inter] text-gray-400 font-regular text-xl"
    />
    <p class="font-[Inter] font-regular text-gray-500 text-sm md:text-base">
      <i class="pi pi-star"></i>
      by
      <NuxtLink :to="`/${props.author}`" class="text-primary-400">@{{ props.author }}</NuxtLink>
    </p>
  </div>
</template>
