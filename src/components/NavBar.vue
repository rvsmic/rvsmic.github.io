<template>
  <div class="nav-container group" @mouseenter="onBlobEnter" @mouseleave="handleMouseLeave">
    <div class="nav-content">
      <div 
        class="nav-hover-pill"
        :style="pillStyle"
      ></div>
      <NavBarObj
        class="nav-item"
        v-for="(el, index) in elements"
        :text="t[el.name][lang]"
        :link="el.link"
        :key="el.name"
        @mouseenter="hoverItem($event, index)"
        @mouseleave="leaveItem"
      />
      <div 
        class="nav-item" 
        @click="toggleLang"
        @mouseenter="hoverItem($event, elements.length)"
        @mouseleave="leaveItem"
      >
        {{ lang === 'en' ? 'PL' : 'EN' }}
      </div>
    </div>
    <div class="nav-ring" :class="ringClass"></div>
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
        ringStep: 0,
        hoveredIndex: null,
        pillLeft: 800,
        pillWidth: 50,
        pillHeight: 40,
        pillTop: 10,
        blobEnterTime: 0,
      };
    },
    computed: {
      ringClass() {
        if (this.ringStep === 1) return 'ring-cover';
        if (this.ringStep === 2) return 'ring-uncover';
        return '';
      },
      pillStyle() {
        return {
          opacity: this.hoveredIndex === null ? 0 : 1,
          transform: `translate(${this.pillLeft}px, ${this.pillTop}px)`,
          width: `${this.pillWidth}px`,
          height: `${this.pillHeight}px`,
        };
      }
    },
    methods: {
      onBlobEnter() {
        this.blobEnterTime = Date.now();
      },
      handleMouseLeave() {
        if (this.hoverTimeout) clearTimeout(this.hoverTimeout);
        this.hoveredIndex = null;
        this.leaveTimeout = setTimeout(() => {
          this.pillLeft = 800;
        }, 200);
      },
      leaveItem() {
        if (this.hoverTimeout) clearTimeout(this.hoverTimeout);
      },
      hoverItem(event, index) {
        if (this.leaveTimeout) clearTimeout(this.leaveTimeout);
        if (this.hoverTimeout) clearTimeout(this.hoverTimeout);
        
        const el = event.currentTarget;
        if (el) {
          const left = el.offsetLeft;
          const top = el.offsetTop;
          const width = el.offsetWidth;
          const height = el.offsetHeight;

          let delay = 0;
          if (this.blobEnterTime && Date.now() - this.blobEnterTime < 500) {
            delay = 500 - (Date.now() - this.blobEnterTime);
          }

          if (delay > 0) {
            this.hoverTimeout = setTimeout(() => {
              this.hoveredIndex = index;
              this.pillLeft = left;
              this.pillTop = top;
              this.pillWidth = width;
              this.pillHeight = height;
            }, delay);
          } else {
            this.hoveredIndex = index;
            this.pillLeft = left;
            this.pillTop = top;
            this.pillWidth = width;
            this.pillHeight = height;
          }
        }
      },
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
    },
  };
</script>


