<template>
  <div
    :class="{
      line: true,
      orange: type === 'orange',
    }"
  ></div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "simple",
    },
  },
};
</script>

<style scoped>
.line {
  border: 1px solid #e5e5e5ff;
  width: 100%;
  margin: 5px 0;
}

.orange {
  border-color: #ffb433;
}
</style>
