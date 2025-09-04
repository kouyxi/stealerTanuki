<script setup lang="ts">
import WidgetGroup from "~/modules/reports/components/Widget/Group/Group.vue";
import WidgetGroupLoader from "~/modules/reports/components/Widget/Group/Loader.vue";
import WidgetCondensed from "~/modules/reports/components/Widget/Condensed/Condensed.vue";
import PublicHeadline from "../../components/PublicHeadline/PublicHeadline.vue";
import WriteupCardGroup from "~/modules/writeup/components/Card/Group/Group.vue";
import WriteupCardItem from "~/modules/writeup/components/Card/Item/Item.vue";
</script>

<template>
  <PublicHeadline />
  <WidgetGroup>
    <WidgetGroupLoader :loading="true" :amount="3">
      <WidgetCondensed :value="10" label="Reports Total"></WidgetCondensed>
      <WidgetCondensed :value="5" label="Reports Gratuitos"></WidgetCondensed>
      <WidgetCondensed :value="5" label="Reports Pagos"></WidgetCondensed>
    </WidgetGroupLoader>
  </WidgetGroup>

  <WidgetDefault title="Todos os reports">
    <WriteupCardGroup> 
      <WriteupCardItem></WriteupCardItem>

    </WriteupCardGroup>
  </WidgetDefault>
</template>
