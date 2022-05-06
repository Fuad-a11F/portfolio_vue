<template>
  <div class="rating" :data-chosen-value="rating">
    <div class="rating__item" data-value="10">★</div>
    <div class="rating__item" data-value="9">★</div>
    <div class="rating__item" data-value="8">★</div>
    <div class="rating__item" data-value="7">★</div>
    <div class="rating__item" data-value="6">★</div>
    <div class="rating__item" data-value="5">★</div>
    <div class="rating__item" data-value="4">★</div>
    <div class="rating__item" data-value="3">★</div>
    <div class="rating__item" data-value="2">★</div>
    <div class="rating__item" data-value="1">★</div>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.rating {
  display: inline-flex;
  flex-direction: row-reverse;
  margin: 0;
  padding: 0;

  &__item {
    font-size: 38px;
    color: lightgray;

    &:hover {
      cursor: pointer;
    }
  }
}
@for $index from 1 to 11 {
  $count: 11 - $index;
  .rating[data-chosen-value="#{$index}"]
    .rating__item:nth-child(n + #{$count}) {
    color: #adad1a;
  }
}
</style>
