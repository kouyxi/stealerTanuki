<script setup lang="ts">
import { Button, Chip } from "primevue";

const { render } = useMarkdown();

const emit = defineEmits<{
  (e: "tap", id: string): void;
}>();

const props = withDefaults(
  defineProps<{
    id: string;
    title: string;
    description: string;
    price: number;
    category: string;
  }>(),
  {
    id: "1",
    title: "XSS lead to ATO",
    description: "CRAZY VULNERABILITY, YOU HAVE TO LEARN NOW!",
    price: 5.99,
    category: "XSS",
  },
);

const isFree = computed(() => {
  return props.price === 0;
});

const description = computed(() => {
  return render(props.description);
});

const amount = computed(() => {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(props.price);
});

const handleClick = () => {
  emit("tap", props.id);
};
</script>

<template>
  <div class="card">
    <Card>
      <template #title>
        <div class="flex flex-wrap gap-2">
          {{ props.title }}
          <Chip class="text-sm" :label="props.category" icon="pi pi-bolt" />
        </div>
      </template>
      <template #content>
        <div v-html="description" />
      </template>
      <template #footer>
        <Button
          @click="handleClick"
          v-if="isFree"
          label="Baixar gratuitamente"
          class="w-full"
          icon="pi pi-shopping-bag"
          icon-pos="right"
        />
        <Button
          @click="handleClick"
          v-else
          :label="`Comprar por ${amount}`"
          class="w-full"
          icon="pi pi-shopping-bag"
          icon-pos="right"
        />
      </template>
    </Card>
  </div>
</template>
