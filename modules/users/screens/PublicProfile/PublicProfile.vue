<script setup lang="ts">
import WidgetGroup from "~/modules/reports/components/Widget/Group/Group.vue";
import WidgetGroupLoader from "~/modules/reports/components/Widget/Group/Loader.vue";
import WidgetCondensed from "~/modules/reports/components/Widget/Condensed/Condensed.vue";
import PublicHeadline from "../../components/PublicHeadline/PublicHeadline.vue";
import WriteupCardGroup from "~/modules/writeup/components/Card/Group/Group.vue";
import WriteupCardItem from "~/modules/writeup/components/Card/Item/Item.vue";
import WriteupCardGroupLoader from "~/modules/writeup/components/Card/Group/Loader.vue";

const route = useRoute();
const router = useRouter();

const handleNavigateToDetail = (id: string) => {
  const { username } = route.params;

  router.push(`/${username}/writeup/${id}`);
};
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
      <WriteupCardGroupLoader :loading="false">
        <WriteupCardItem
          @tap="handleNavigateToDetail"
          v-for="n in 10"
          :key="n"
          id="123"
          title="IDOR leading to RCE"
          description="OH MY GOD, WHAT INSANE VULN"
          :price="10"
          category="IDOR"
        />
      </WriteupCardGroupLoader>
    </WriteupCardGroup>
  </WidgetDefault>
</template>
