<template>
  <PageTitle :title="t.pagetitle[lang]" />

  <main>
    <div>
      <h2>{{ t.overview[lang] }}</h2>
      <p>{{ t.overview_text[lang] }}</p>
      <div class="spacer" />
      <h2>{{ t.experience[lang] }}</h2>
      <p>{{ t.experience_text[lang] }}</p>
      <div class="spacer" />
      <h2>{{ t.education[lang] }}</h2>
      <p>
        {{ t.education_text[lang] }}
      </p>
      <div class="spacer" />
      <h2>{{ t.languages[lang] }}</h2>
      <p>
        {{ t.languages_text[lang] }}
      </p>
      <div class="spacer" />
      <h2>{{ t.interests[lang] }}</h2>
      <p>
        {{ t.interests_text[lang] }}
      </p>
    </div>
    <div class="spacer" />
  </main>
</template>

<script>
  import translations from "@/assets/translations.json";
  import PageTitle from "@/components/PageTitle.vue";

  export default {
    emits: ["toggle-cover"],
    components: {
      PageTitle,
    },
    props: {
      lang: {
        type: String,
        default: "en",
      },
    },
    data() {
      return {
        t: translations.about,
      };
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
