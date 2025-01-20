<template>
  <PageTitle :title="t.pagetitle[lang]" />

  <main>
    <div>
      <section>
        <h2>{{ t.portfolio[lang] }}</h2>
        <h3>{{ t.description[lang] }}</h3>
        <p>
          {{ t.portfolio_description[lang] }}
        </p>
        <h3>{{ t.technologies[lang] }}</h3>
        <p>{{ t.portfolio_technologies[lang] }}</p>
        <h3>{{ t.links[lang] }}</h3>
        <p>
          {{ t.source_code[lang] }}
          <a href="https://github.com/rvsmic/Portfolio" class="link">{{
            t.github_repo[lang]
          }}</a>
        </p>
      </section>

      <div class="spacer" />

      <section>
        <h2>{{ t.bachelors[lang] }}</h2>
        <h3>{{ t.description[lang] }}</h3>
        <p>
          {{ t.bachelors_description[lang] }}
        </p>
        <h3>{{ t.technologies[lang] }}</h3>
        <p>{{ t.bachelors_technologies[lang] }}</p>
        <h3>{{ t.links[lang] }}</h3>
        <p>
          {{ t.source_code[lang] }}
          <a href="https://github.com/rvsmic/Licencjat" class="link">{{
            t.github_repo[lang]
          }}</a>
        </p>
      </section>

      <div class="spacer" />

      <section>
        <h2>{{ t.medsys[lang] }}</h2>
        <h3>{{ t.description[lang] }}</h3>
        <p>
          {{ t.medsys_description[lang] }}
        </p>
        <h3>{{ t.technologies[lang] }}</h3>
        <p>
          {{ t.medsys_technologies[lang] }}
        </p>
        <h3>{{ t.links[lang] }}</h3>
        <p>
          {{ t.front_end[lang] }}
          <a href="https://github.com/rvsmic/Medsys-Gui" class="link">{{
            t.github_repo[lang]
          }}</a>
        </p>
        <p>
          {{ t.back_end[lang] }}
          <a href="https://github.com/rvsmic/Medsys-Api" class="link">{{
            t.github_repo[lang]
          }}</a>
        </p>
      </section>

      <div class="spacer" />

      <section>
        <h2>{{ t.sudoku[lang] }}</h2>
        <h3>{{ t.description[lang] }}</h3>
        <p>
          {{ t.sudoku_description[lang] }}
        </p>
        <h3>{{ t.technologies[lang] }}</h3>
        <p>
          {{ t.sudoku_technologies[lang] }}
        </p>
        <h3>{{ t.links[lang] }}</h3>
        <p>
          {{ t.source_code[lang] }}
          <a href="https://github.com/rvsmic/Sudoku-Solver" class="link">{{
            t.github_repo[lang]
          }}</a>
        </p>
      </section>

      <div class="spacer" />

      <section>
        <h2>{{ t.software_engineering[lang] }}</h2>
        <h3>{{ t.description[lang] }}</h3>
        <p>
          {{ t.software_engineering_description[lang] }}
        </p>
        <h3>{{ t.technologies[lang] }}</h3>
        <p>{{ t.software_engineering_technologies[lang] }}</p>
        <h3>{{ t.links[lang] }}</h3>
        <p>
          {{ t.source_code[lang] }}
          <a href="https://github.com/rvsmic/ProjektIO" class="link">{{
            t.github_repo[lang]
          }}</a>
        </p>
      </section>

      <div class="spacer" />

      <section>
        <h2>{{ t.divcost[lang] }}</h2>
        <h3>{{ t.description[lang] }}</h3>
        <p>
          {{ t.divcost_description[lang] }}
        </p>
        <h3>{{ t.technologies[lang] }}</h3>
        <p>{{ t.divcost_technologies[lang] }}</p>
        <h3>{{ t.links[lang] }}</h3>
        <p>
          {{ t.source_code[lang] }}
          <a href="https://github.com/rvsmic/DivCost" class="link">{{
            t.github_repo[lang]
          }}</a>
        </p>
      </section>

      <div class="spacer" />

      <section>
        <h2>{{ t.ticker[lang] }}</h2>
        <h3>{{ t.description[lang] }}</h3>
        <p>
          {{ t.ticker_description[lang] }}
        </p>
        <h3>{{ t.technologies[lang] }}</h3>
        <p>{{ t.ticker_technologies[lang] }}</p>
        <h3>{{ t.links[lang] }}</h3>
        <p>
          {{ t.source_code[lang] }}
          <a href="https://github.com/rvsmic/Ticker" class="link">{{
            t.github_repo[lang]
          }}</a>
        </p>
      </section>
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
        t: translations.projects,
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
