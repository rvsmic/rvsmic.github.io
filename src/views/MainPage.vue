<template>
  <TitleCard :lang="lang" />
</template>

<script>
  import TitleCard from "@/components/TitleCard.vue";

  export default {
    props: {
      lang: {
        type: String,
        default: "en",
      },
    },
    components: {
      TitleCard,
    },
  };
</script>
