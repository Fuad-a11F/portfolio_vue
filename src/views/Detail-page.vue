<template>
  <layout-wrapper>
    {{ this.projectDetail }}

    <div v-if="isLoading" class="center">
      <spinner-ui></spinner-ui>
    </div>
  </layout-wrapper>
</template>

<script>
import LayoutWrapper from "@/component/layout/Layout";
import SpinnerUi from "@/component/UI/SpinnerUi.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    LayoutWrapper,
    SpinnerUi,
  },

  computed: {
    ...mapState({
      projectDetail: (state) => state.project.projectDetail,
      isLoading: (state) => state.project.isLoading,
    }),
  },

  mounted() {
    this.fetchProjectById();
  },

  methods: {
    ...mapActions({
      fetchProjectById: "fetchProjectById",
    }),
  },

  unmounted() {
    this.removeProjectDetail();
  },
};
</script>

<style scoped></style>
