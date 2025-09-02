<script setup lang="ts">
import WidgetGroup from "~/modules/reports/components/Widget/Group/Group.vue";
import WidgetCondensed from "~/modules/reports/components/Widget/Condensed/Condensed.vue";
import PublicHeadline from "../../components/PublicHeadline/PublicHeadline.vue";
</script>

<template>
  <PublicHeadline />
  <WidgetGroup>
    <WidgetCondensed :value="10" label="Reports Total"></WidgetCondensed>
    <WidgetCondensed :value="5" label="Reports Gratuitos"></WidgetCondensed>
    <WidgetCondensed :value="5" label="Reports Pagos"></WidgetCondensed>
  </WidgetGroup>
</template>
