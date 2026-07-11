<template>
  <div>
    <PageTitle :title="t.pagetitle[lang]" />

    <main>
      <div>
        <h2>{{ t.email[lang] }}</h2>
        <p>
          {{ t.email_description[lang] }}
          <a href="mailto: michalrusinek02@gmail.com" class="link"
            >michalrusinek02@gmail.com</a
          >
        </p>
        <div class="spacer" />
        <h2>{{ t.linkedin[lang] }}</h2>
        <p>
          {{ t.linkedin_description[lang] }}
          <a href="https://www.linkedin.com/in/rusinekm/" class="link"
            >Michał Rusinek</a
          >
        </p>
        <div class="spacer" />
        <h2>{{ t.github[lang] }}</h2>
        <p>
          {{ t.github_description[lang] }}
          <a href="https://www.github.com/rvsmic" class="link">rvsmic</a>
        </p>
      </div>
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
        t: translations.contact,
      };
    },
  };
</script>
