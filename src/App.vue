<template>
  <div class="app-container">
    <RouterView v-slot="{ Component, route }">
      <transition name="slide-up">
        <div :key="route.path" class="page-container">
          <component :is="Component" :lang="lang" />
        </div>
      </transition>
    </RouterView>
  </div>
  <NavBar
    :lang="lang"
    :elements="navBarElements"
    @toggle-lang="toggleLang"
    @toggle-cover="toggleCover"
    @trigger-bg-ring="triggerBgRing"
  />
  <MobileNavBar
    :lang="lang"
    :elements="navBarElements"
    @toggle-lang="toggleLang"
    @toggle-cover="toggleCover"
    @trigger-bg-ring="triggerBgRing"
  />
  <div
    class="page-transition-overlay bg-light-background dark:bg-dark-background"
    :class="{ 'transition-active': isBlob && coverShown }"
  ></div>
  <div class="bg-ring-overlay" :class="bgRingClass"></div>
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
      bgRingClass() {
        if (this.bgRingStep === 1) return "bg-ring-cover";
        if (this.bgRingStep === 2) return "bg-ring-uncover";
        return "";
      },
    },
    data() {
      return {
        coverShown: false,
        coverTop: false,
        isBlob: false,
        bgRingStep: 0,
      };
    },
    methods: {
      toggleLang() {
        this.$store.commit("changeLang");
      },
      toggleCover(coverShown, top = false, isBlob = false) {
        this.coverShown = coverShown;
        this.coverTop = top;
        this.isBlob = isBlob;
      },
      triggerBgRing() {
        if (this.bgRingStep !== 0) return;
        this.bgRingStep = 1;
        setTimeout(() => {
          this.bgRingStep = 2;
          setTimeout(() => {
            this.bgRingStep = 0;
          }, 400);
        }, 400);
      },
    },
  };
</script>
