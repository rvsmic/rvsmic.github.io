<template>
  <RouterView :lang="lang" :key="lang" @toggle-cover="toggleCover" />
  <NavBar
    :lang="lang"
    :elements="navBarElements"
    @toggle-lang="toggleLang"
    @toggle-cover="toggleCover"
  />
  <MobileNavBar
    :lang="lang"
    :elements="navBarElements"
    @toggle-lang="toggleLang"
    @toggle-cover="toggleCover"
  />
  <div class="transition-cover" :style="transitionCoverStyle">'-'</div>
</template>

<script>
  import { RouterView } from "vue-router";
  import NavBar from "@/components/NavBar.vue";
  import MobileNavBar from "@/components/MobileNavBar.vue";

  export default {
    components: {
      NavBar,
      MobileNavBar,
    },
    computed: {
      navBarElements() {
        return [
          {
            name: "home",
            link: "/",
          },
          {
            name: "about",
            link: "/about",
          },
          {
            name: "cv",
            link: "/cv",
          },
          {
            name: "projects",
            link: "/projects",
          },
          {
            name: "contact",
            link: "/contact",
          },
        ];
      },
      lang() {
        return this.$store.state.lang;
      },
      transitionCoverStyle() {
        return {
          transform: this.coverShown ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.4s ease-in-out",
          "z-index": this.coverTop ? 40 : 20,
        };
      },
    },
    data() {
      return {
        coverShown: false,
        coverTop: false,
      };
    },
    methods: {
      toggleLang() {
        this.$store.commit("changeLang");
      },
      toggleCover(coverShown, top = false) {
        this.coverShown = coverShown;
        this.coverTop = top;
      },
    },
  };
</script>
