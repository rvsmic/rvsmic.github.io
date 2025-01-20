<template>
  <div class="title">
    {{ title }}
  </div>
  <div class="title-bg" />
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: "Page title",
      },
    },
  };
</script>
