<template>
  <div class="title">
    {{ title }}
  </div>
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
