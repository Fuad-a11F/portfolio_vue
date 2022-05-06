<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
* {
  margin: 0;
  box-sizing: border-box;
}
body {
  background: #ffb433;
}
.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
}

@import "styles/icons.css";
</style>
