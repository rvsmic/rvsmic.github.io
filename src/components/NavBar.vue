<template>
  <div class="nav-bar">
    <NavBarObj
      class="nav-obj"
      v-for="el in elements"
      :text="t[el.name][lang]"
      :link="el.link"
      :key="el.name"
    />
    <div class="nav-bar-icon" @click="toggleLang">
      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4 0H6V2H10V4H8.86807C8.57073 5.66996 7.78574 7.17117 6.6656 8.35112C7.46567 8.73941 8.35737 8.96842 9.29948 8.99697L10.2735 6H12.7265L15.9765 16H13.8735L13.2235 14H9.77647L9.12647 16H7.0235L8.66176 10.9592C7.32639 10.8285 6.08165 10.3888 4.99999 9.71246C3.69496 10.5284 2.15255 11 0.5 11H0V9H0.5C1.5161 9 2.47775 8.76685 3.33437 8.35112C2.68381 7.66582 2.14629 6.87215 1.75171 6H4.02179C4.30023 6.43491 4.62904 6.83446 4.99999 7.19044C5.88743 6.33881 6.53369 5.23777 6.82607 4H0V2H4V0ZM12.5735 12L11.5 8.69688L10.4265 12H12.5735Z"
            class="fill-light-text dark:fill-dark-text"
          ></path>
        </g>
      </svg>
    </div>
  </div>
  <div class="nav-bar-bg" />
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
        this.$emit("toggle-cover", true, true);
        setTimeout(() => this.$emit("toggle-lang"), 400);
        setTimeout(() => this.$emit("toggle-cover", false, true), 400);
      },
    },
  };
</script>
