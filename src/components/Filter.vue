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
  <div class="content">
    <template v-for="(card, index) in content" :key="index">
      <div
        v-if="
          (currentContentType.length == 0 && currentSubjects.length == 0) ||
          (currentContentType.includes(card.contentType) &&
            currentSubjects.includes(card.subject)) ||
          (currentContentType.length == 0 &&
            currentSubjects.includes(card.subject)) ||
          (currentContentType.includes(card.contentType) &&
            currentSubjects.length == 0)
        "
        class="card"
      >
        <img :src="card.image" :alt="card.name" />

        <div class="card-content">
          <h2>{{ card.name }}</h2>
          <div class="filterOptions">
            <p class="option">{{ card.contentType }}</p>
            <p class="option">{{ card.subject }}</p>
          </div>
          <p>{{ card.description }}</p>
        </div>

        <a :href="'/resources' + card.link" class="btn-secondary">See More</a>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    contentType: Array,
    subjects: Array,
    content: Array,
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
    },
  },
};
</script>

<style lang="scss">
@use "../assets/scss" as *;

.filters {
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

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

.content {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem 0;
  margin-bottom: 2rem;

  .card {
    flex: 0 0 30%;
    border: 1px solid #676;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    @include tablet {
      flex: 0 0 45%;
    }

    @include mobile {
      flex: 0 0 100%;
    }

    .filterOptions {
      display: flex;
      align-items: center;
      gap: 1rem;

      .option {
        border: 1px solid #676;
        border-radius: 10px;
        color: #676;
        padding: 0.5rem 0.75rem;
      }
    }

    img {
      width: 100%;
      object-fit: contain;
      height: 10rem;
      border-bottom: 1px solid rgba(102, 119, 102, 0.096);
      padding: 1rem 0;
    }

    &-content {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h2 {
        @extend %paragraf-size;
      }
      p {
        @extend %small-size;
        color: $cl-grey;
      }
    }

    .btn-secondary {
      width: fit-content;
      background-color: $cl-black;
      color: $cl-white;
      text-decoration: none;
      margin: 1rem;
      padding: 0.5rem 0.75rem;
      border-radius: 10px;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
