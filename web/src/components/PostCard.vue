<template>
  <div class="post-card content-box" :class="{'post-card--has-poster' : post.poster}">
    <div class="post-card__header">
      <div class="post-card__cover">
        <g-image
          alt="Cover image"
          v-if="post.mainImage"
          class="post-card__image"
          :src="$urlForImage(post.mainImage, $page.metadata.sanityOptions).height(400).width(400).auto('format').url()"
        />
      </div>
      <div class="post-card__speaker">
        <g-image
          alt="Speaker image"
          class="post-card__header__speaker-image"
          :src="$urlForImage(post.speakers[0].speaker.image, $page.metadata.sanityOptions).width(180).url()"
          width="180"
          height="180"
          blur="5"
        />
        <post-meta class="post-card__meta" :post="post" />
      </div>
    </div>
    <div class="post-card__content">
      <h2 class="post-card__title" v-html="post.title" />
      <!-- <block-content :blocks="post._rawExcerpt" /> -->
      <block-content :blocks="post._rawBody" />

      <post-meta class="post-card__meta" :post="post" />
      <post-tags class="post-card__tags" :post="post" />

      <g-link class="post-card__link" :to="post.slug.current">Link</g-link>
    </div>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import BlockContent from '~/components/BlockContent'

export default {
  components: {
    PostMeta,
    PostTags,
    BlockContent
  },
  props: {
    post: Object
  }
}
</script>

<style lang="scss">
.post-card {
  margin-bottom: var(--space);
  position: relative;

  &__header {
    margin-left: calc(var(--space) * -1);
    margin-right: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    margin-top: calc(var(--space) * -1);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    &:empty {
      display: none;
    }

    &__speaker-image {
      border-radius: 100%;
      width: 90px;
      height: 90px;
      // margin-top: 1em;
      // margin-bottom: auto;
      // margin-bottom: calc(var(--space) / 2);
      float: right;
      margin-right: calc(var(--space) / 2);
      margin-top: calc(var(--space) / 2);
    }
  }

  &__cover {
    width: 50%;
    float: left;
  }

  &__speaker {
    margin-left: 50%;
  }

  &__image {
    // min-width: 100%;
    max-width: 100%;
    width: 300px;
    margin-left: calc(var(--space) / 4);
    margin-top: calc(var(--space) / 4);
    box-shadow: 1px 5px 15px 0 rgba(0, 0, 0, 0.1);
  }

  &__title {
    margin-top: 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, 0.1);
  }

  &__tags {
    z-index: 1;
    position: relative;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}
</style>
