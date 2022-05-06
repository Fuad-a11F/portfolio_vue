<template>
  <div class="info_item">
    <div class="info_item-left">{{ skill }}</div>
    <div class="info_item-right">{{ level }}</div>
  </div>
</template>

<script>
export default {
  props: {
    skill: {
      type: String,
      require: true,
    },

    level: {
      type: String,
    },
  },
};
</script>

<style scoped>
.info_item {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
</style>
