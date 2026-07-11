<template>
  <div class="nav-blob group">
    <div class="nav-blob-star">*</div>
    <div class="nav-blob-content">
      <NavBarObj
        class="nav-blob-obj"
        v-for="el in elements"
        :text="t[el.name][lang]"
        :link="el.link"
        :key="el.name"
      />
      <div class="nav-blob-obj" @click="toggleLang">
        {{ lang === 'en' ? 'PL' : 'EN' }}
      </div>
    </div>
  </div>
</template>

<script>
  import translations from "@/assets/translations.json";
  import NavBarObj from "@/components/NavBarObj.vue";

  export default {
    emits: ["toggle-lang", "toggle-cover"],
    components: {
      NavBarObj,
    },
    props: {
      lang: {
        type: String,
        default: "en",
      },
      elements: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        t: translations.navbar,
      };
    },
    methods: {
      toggleLang() {
        this.$emit("toggle-cover", true, true, true);
        setTimeout(() => this.$emit("toggle-lang"), 400);
        setTimeout(() => this.$emit("toggle-cover", false, true, true), 400);
      },
    },
  };
</script>
