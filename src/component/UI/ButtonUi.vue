<template>
  <button class="button-hire">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      require: true,
    },
  },
};
</script>

<style scoped>
.button-hire {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffb433;
  border: none;
  border-radius: 5px;
  padding: 9px 20px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
}
</style>
