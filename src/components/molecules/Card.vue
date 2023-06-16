<template>
  <a class="project-card" :href="url">
    <img :src="imgSrc" :alt="title + '- image'" />
    <div class="description">
      <p class="title">{{ title }}</p>
      <div class="roles">
        <template v-for="tag in tags" :key="tag" :text="tag">
          <p class="chip">{{ tag }}</p>
        </template>
      </div>
    </div>
  </a>
</template>

<script>
import Chip from "./../atoms/Chip.astro";

export default {
  name: "ProjectCard",
  components: {
    Chip,
  },
  props: {
    title: String,
    url: String,
    imgSrc: String,
    tags: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../styles/settings";

.project-card {
  text-decoration: none;
  height: fit-content;

  @include tablet {
    width: 100%;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: $border-radius;
  }
  .description {
    color: $cl-black;

    .title {
      @extend %text-size;
      margin-top: 0;
      margin-bottom: calc($lg-size / 3);
    }
    .roles {
      display: flex;
      gap: calc($lg-size / 3);
      color: $cl-gray;
      @include mobile {
        flex-wrap: wrap;
      }
      .chip {
        @extend %small-size;

        border: 1px solid $cl-gray;
        padding: 0.5rem 1rem;
        border-radius: 10px;
        margin: 0;
      }
    }
  }
}
</style>
