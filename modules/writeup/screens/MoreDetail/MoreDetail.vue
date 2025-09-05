<script setup lang="ts">
import PublicHeadline from "../../components/PublicHeadline/PublicHeadline.vue";
import WriteupCodeSnippet from "../../components/CodeSnippet/CodeSnippet.vue";
import LazyDialogPaymentSuccess from "~/modules/payments/components/DialogPaymentSuccess/DialogPaymentSuccess.vue";
import LazyDialogPaymentError from "~/modules/payments/components/DialogPaymentError/DialogPaymentError.vue";

const route = useRoute();
const isPaymentSuccessfully = ref<boolean>(false);
const isPaymentFail = ref<boolean>(false);

onMounted(() => {
  const { success_payment, fail_payment } = route.query;

  if (success_payment) {
    isPaymentSuccessfully.value = true;
  }

  if (fail_payment) {
    isPaymentFail.value = true;
  }
});
</script>

<template>
  <PublicHeadline />

  <WriteupCodeSnippet />

  <LazyDialogPaymentSuccess v-model:visible="isPaymentSuccessfully" />
  <LazyDialogPaymentError v-model:visible="isPaymentFail" />
</template>
