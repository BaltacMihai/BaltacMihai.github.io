<template>
  <div class="filters">
    <div class="filter-names">
      <p class="title">Content Type:</p>
      <p class="title">Subjects:</p>
    </div>

    <div class="filter-content">
      <div class="options">
        <template v-for="(content, index) in contentType" :key="content">
          <p
            class="btn-secondary"
            :class="{
              active:
                (index == 0 && currentContentType.length == 0) ||
                currentContentType.includes(content),
            }"
            @click="applyFilter"
            :data-title="content"
            data-type="contentType"
          >
            {{ content }}
          </p>
        </template>
      </div>

      <div class="options" id="{ids.subjects}">
        <template v-for="(content, index) in subjects" :key="content">
          <p
            class="btn-secondary"
            :class="{
              active:
                (index == 0 && currentSubjects.length == 0) ||
                currentSubjects.includes(content),
            }"
            @click="applyFilter"
            :data-title="content"
            data-type="subjects"
          >
            {{ content }}
          </p>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contentType: Array,
    subjects: Array,
  },
  data() {
    return {
      currentContentType: [],
      currentSubjects: [],
    };
  },
  methods: {
    applyFilter(e) {
      switch (e.target.dataset.type) {
        case "contentType":
          if (e.target.dataset.title == "All") {
            this.currentContentType = [];
            break;
          }
          if (this.currentContentType.includes(e.target.dataset.title)) {
            const index = this.currentContentType.indexOf(
              e.target.dataset.title
            );

            this.currentContentType.splice(index, 1);
          } else {
            this.currentContentType.push(e.target.dataset.title);
          }
          break;

        case "subjects":
          if (e.target.dataset.title == "All") {
            this.currentSubjects = [];
            break;
          }
          if (this.currentSubjects.includes(e.target.dataset.title)) {
            const index = this.currentSubjects.indexOf(e.target.dataset.title);

            this.currentSubjects.splice(index, 1);
          } else {
            this.currentSubjects.push(e.target.dataset.title);
          }

          break;

        default:
          break;
      }

      console.log(e.target.dataset.title);
      console.log(e.target);
    },
  },
};
</script>

<style lang="scss">
@use "../assets/scss" as *;

.filters {
  display: flex;
  gap: 1.5rem;

  .filter-names {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    p {
      @extend %paragraf-size;

      &.title {
        margin-right: 1rem;
      }
    }
  }

  .filter-content {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    .options {
      display: flex;
      gap: 1rem;
    }

    .btn-secondary {
      @extend %small-size;
      border: 1px solid #676;
      padding: 0.5rem 1rem;
      border-radius: 10px;

      &.active {
        background-color: $cl-black;
        color: $cl-white;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
