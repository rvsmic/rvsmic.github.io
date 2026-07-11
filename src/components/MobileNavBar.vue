<template>
  <div class="mobile-nav-blob" :class="{ 'mobile-nav-blob-active': menuShown }">
    <div
      class="mobile-nav-blob-star"
      :class="{ 'opacity-0 pointer-events-none': menuShown }"
      @click="toggleMenu"
    >
      *
    </div>

    <div
      class="mobile-nav-blob-content"
      :class="{ 'opacity-100 pointer-events-auto': menuShown }"
    >
      <NavBarObj
        class="mobile-nav-obj"
        v-for="el in elements"
        :text="t[el.name][lang]"
        :link="el.link"
        :key="el.name"
        @click="toggleMenu"
      />
      <div class="mobile-nav-obj" @click="toggleLang">
        {{ lang === "en" ? "PL" : "EN" }}
      </div>

      <div class="mobile-nav-close" @click="toggleMenu">x</div>
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
        menuShown: false,
      };
    },
    methods: {
      toggleLang() {
        this.$emit("toggle-cover", true, true, true);
        setTimeout(() => this.$emit("toggle-lang"), 400);
        setTimeout(() => this.$emit("toggle-cover", false, true, true), 400);
      },
      toggleMenu() {
        this.menuShown = !this.menuShown;
      },
    },
  };
</script>
