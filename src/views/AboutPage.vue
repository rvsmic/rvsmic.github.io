<template>
  <div>
    <PageTitle :title="t.pagetitle[lang]" />

  <main>
    <div>
      <h2>{{ t.overview[lang] }}</h2>
      <p v-html="t.overview_text[lang]"></p>
      <div class="spacer" />
      <h2>{{ t.experience[lang] }}</h2>
      <p v-html="t.experience_text[lang]"></p>
      <div class="spacer" />
      <h2>{{ t.education[lang] }}</h2>
      <p v-html="t.education_text[lang]"></p>
      <div class="spacer" />
      <h2>{{ t.languages[lang] }}</h2>
      <p v-html="t.languages_text[lang]"></p>
      <div class="spacer" />
      <h2>{{ t.interests[lang] }}</h2>
      <p v-html="t.interests_text[lang]"></p>
    </div>
    <div class="small-spacer" />
  </main>
  </div>
</template>

<script>
  import translations from "@/assets/translations.json";
  import PageTitle from "@/components/PageTitle.vue";

  export default {
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
  };
</script>
