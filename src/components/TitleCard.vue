<template>
  <div class="home">
    <h1>michał rusinek</h1>
    <h2>{{ t.subtitle[lang] }}</h2>
  </div>
</template>

<script>
  import translations from "@/assets/translations.json";

  export default {
    props: {
      lang: {
        type: String,
        default: "en",
      },
    },
    data() {
      return {
        t: translations.home,
      };
    },
  };
</script>
