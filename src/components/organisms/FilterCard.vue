<!-- filter={[filters, ["as", "asc"]]}
labelName={["Role", "Somethings"]} -->

<template>
  <div class="filters">
    <template v-for="(name, indexLabel) in labelName" :key="name">
      <div class="filter-names">
        <p class="filter-name">{{ name }}:</p>
        <div class="objects">
          <template v-for="(chip, chipIndex) in filter[indexLabel]">
            <p
              class="chip"
              :class="{
                active:
                  (chipIndex == 0 && activeFilter[name].length == 0) ||
                  activeFilter[name].includes(chip),
              }"
              @click="applyFilter"
              :data-title="chip"
              :data-label="name"
            >
              {{ chip }}
            </p>
          </template>
        </div>
      </div>
    </template>

    <div class="content">
      <template v-for="(card, index) in cardContent" :key="index">
        <Card
          :title="card.frontmatter.title"
          :url="hrefAdded + '/' + card.frontmatter.url"
          :imgSrc="card.frontmatter.imageSrc"
          :tags="convertCardTags(card.frontmatter)"
          v-if="isVisible(convertCardTags2Visible(card.frontmatter))"
        />

        <!--  :tags="card.frontmatter.tags"
          v-if="isVisible([card.frontmatter.tags])" -->

        <!-- :tags="[...card.frontmatter.subject, ...card.frontmatter.contentType]"
          v-if="
            isVisible([card.frontmatter.subject, card.frontmatter.contentType])
          " -->
        <!-- :tags="card.frontmatter.tags" -->
      </template>
    </div>
  </div>
</template>
<script>
import Card from "./../molecules/Card.vue";
import getUniqueItems from "./../../utils/getUniqueItems";

export default {
  components: {
    Card,
  },
  props: {
    cardContent: Array,
    filter: Array,
    labelName: Array,
    hrefAdded: String,
  },
  data() {
    let _temp = {};
    this.labelName?.forEach((_labelName) => {
      _temp[_labelName] = [];
    });
    return {
      activeFilter: _temp,
    };
  },
  computed: {
    cardTags() {},
  },
  methods: {
    applyFilter(e) {
      const selectedFilters = e.target.dataset.title;
      const selectedLabel = e.target.dataset.label;

      if (selectedFilters == "All") {
        this.activeFilter[selectedLabel] = [];

        return null;
      }

      if (this.activeFilter[selectedLabel].includes(selectedFilters)) {
        const index = this.activeFilter[selectedLabel].indexOf(selectedFilters);

        this.activeFilter[selectedLabel].splice(index, 1);
      } else {
        this.activeFilter[selectedLabel].push(selectedFilters);
      }
    },
    isVisible(tagsToCheck) {
      let _response = true;
      this.labelName?.forEach((_labelName, _labelIndex) => {
        //If there aren't any activeFilter we return true;
        if (_response == true)
          if (this.activeFilter[_labelName].length == 0) {
            _response = true;
          } else {
            // If there are activeFilter items
            // check the tags from Card to check if there is something in the active Filter

            let _tempResponse = false;

            tagsToCheck[_labelIndex]?.forEach((_tag) => {
              if (!_tempResponse)
                if (this.activeFilter[_labelName].includes(_tag)) {
                  _tempResponse = true;
                } else {
                  _tempResponse = false;
                }
            });
            _response = _tempResponse;
          }
      });

      return _response;
    },
    convertCardTags(tags) {
      switch (this.hrefAdded) {
        case "resource":
          return [...tags.subject, ...tags.contentType];
          break;

        case "project":
          return tags.tags;
          break;

        default:
          break;
      }
    },
    convertCardTags2Visible(tags) {
      switch (this.hrefAdded) {
        case "resource":
          return [tags.subject, tags.contentType];
          break;

        case "project":
          return [tags.tags];
          break;

        default:
          break;
      }
    },
  },
};
</script>
<style lang="scss">
@use "../../styles/settings" as *;

.filters {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  .filter-names {
    display: flex;
    p {
      @extend %text-size;

      &.filter-name {
        margin-right: 1rem;
      }
    }
  }
  .objects {
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;

    .chip {
      @extend %small-size;
      border: 1px solid $cl-gray;
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
  margin-bottom: 2rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem 2rem;

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
  }

  @include mobile {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
