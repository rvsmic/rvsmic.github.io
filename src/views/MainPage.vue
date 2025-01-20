<template>
  <TitleCard :lang="lang" />
</template>

<script>
  import TitleCard from "@/components/TitleCard.vue";

  export default {
    emits: ["toggle-cover"],
    props: {
      lang: {
        type: String,
        default: "en",
      },
    },
    components: {
      TitleCard,
    },
    beforeRouteLeave(to, from, next) {
      this.$emit("toggle-cover", true);
      setTimeout(next, 400);
    },
    created() {
      this.$emit("toggle-cover", false);
    },
  };
</script>
