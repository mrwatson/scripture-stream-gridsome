<template>
  <div class="post-tags">
    <g-link class="post-tags__link" v-for="topic in post.topics" :key="topic.id" :to="'topics/' + topic.slug.current">
      <span>#</span>
      {{ topic.title }}
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>

<style lang="scss">
.post-tags {
  margin: 1em 0 0;

  &__link {
    margin-right: 0.7em;
    font-size: 0.8em;
    color: currentColor;
    text-decoration: none;
    background-color: var(--bg-color);
    color: currentColor !important; //Todo: remove important;
    padding: 0.5em;
    border-radius: var(--radius);
  }
}
</style>
