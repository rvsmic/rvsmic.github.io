<template>
  <!-- Invisible Backdrop to capture outside clicks -->
  <div 
    v-if="menuShown" 
    class="mobile-nav-backdrop" 
    @click="toggleMenu"
  ></div>

  <div 
    class="mobile-nav-wrapper"
    :class="menuShown ? 'mobile-nav-wrapper-open cursor-default' : 'mobile-nav-wrapper-closed cursor-pointer'"
    @click="!menuShown ? toggleMenu() : null"
  >
    <div class="mobile-nav-container">
      <div
        class="mobile-nav-menu"
        :class="menuShown ? 'mobile-nav-menu-open' : 'mobile-nav-menu-closed'"
      >
        <NavBarObj
          class="mobile-nav-item"
          v-for="el in elements"
          :text="t[el.name][lang]"
          :link="el.link"
          :key="el.name"
          @click.stop="toggleMenu"
        />
        <div 
          class="mobile-nav-item" 
          @click.stop="toggleLang"
        >
          {{ lang === "en" ? "PL" : "EN" }}
        </div>
      </div>
        <div 
          class="absolute inset-0 flex items-center justify-center transition-opacity duration-200 pointer-events-none"
          :class="menuShown ? 'opacity-0' : 'opacity-100'"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-light-background dark:text-dark-background" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      <div class="nav-ring mobile-nav-ring" :class="ringClass"></div>
    </div>
  </div>
</template>

<script>
  import translations from "@/assets/translations.json";
  import NavBarObj from "@/components/NavBarObj.vue";

  export default {
    emits: ["toggle-lang", "toggle-cover", "trigger-bg-ring"],
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
        ringStep: 0,
      };
    },
    computed: {
      ringClass() {
        if (this.ringStep === 1) return 'ring-cover';
        if (this.ringStep === 2) return 'ring-uncover';
        return '';
      },
    },
    methods: {
      toggleLang() {
        if (this.ringStep !== 0) return;
        this.ringStep = 1;
        this.$emit("trigger-bg-ring");
        setTimeout(() => {
          this.$emit("toggle-lang");
          this.ringStep = 2;
          setTimeout(() => {
            this.ringStep = 0;
          }, 400);
        }, 400);
      },
      toggleMenu() {
        this.menuShown = !this.menuShown;
      },
    },
  };
</script>
