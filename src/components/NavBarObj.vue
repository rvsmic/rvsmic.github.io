<template>
  <RouterLink :to="link">{{ text }}</RouterLink>
</template>

<script>
  import { RouterLink } from "vue-router";

  export default {
    components: {
      RouterLink,
    },
    props: {
      link: {
        type: String,
        default: "",
      },
      text: {
        type: String,
        default: "Nav Destination",
      },
    },
  };
</script>
