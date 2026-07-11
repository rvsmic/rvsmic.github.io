<template>
  <div class="relative w-full min-h-screen overflow-x-hidden">
    <RouterView v-slot="{ Component, route }">
      <transition name="slide-up">
        <div
          :key="route.path"
          class="w-full min-h-screen bg-light-background dark:bg-dark-background pb-[env(safe-area-inset-bottom)]"
        >
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
  />
  <MobileNavBar
    :lang="lang"
    :elements="navBarElements"
    @toggle-lang="toggleLang"
    @toggle-cover="toggleCover"
  />
  <div
    class="blob-overlay bg-light-background dark:bg-dark-background"
    :class="{ 'blob-active': isBlob && coverShown }"
  ></div>
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
    },
    data() {
      return {
        coverShown: false,
        coverTop: false,
        isBlob: false,
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
    },
  };
</script>
