<template>
  <div>
    <PageTitle :title="t.pagetitle[lang]" />
    <main>
      <div>
        <section>
          <div class="flex items-center justify-between w-full">
            <h2>{{ t.uma[lang] }}</h2>
            <div class="small-blob">{{ t.tag_uni[lang] }}</div>
          </div>
          <p>{{ t.group_project[lang] }} 2</p>
          <h3>{{ t.description[lang] }}</h3>
          <p>
            {{ t.uma_description[lang] }}
          </p>
          <h3>{{ t.technologies[lang] }}</h3>
          <div class="horizontal-elements">
            <div v-for="el in t.uma_technologies" :key="el" class="h-element">
              {{ el }}
            </div>
          </div>
          <h3>{{ t.links[lang] }}</h3>
          <p>
            {{ t.source_code[lang] }}
            <a
              href="https://github.com/rvsmic/Machine-Learning-Uni"
              class="link"
              >{{ t.github_repo[lang] }}</a
            >
          </p>
        </section>

        <div class="spacer" />

        <section>
          <div class="flex items-center justify-between w-full">
            <h2>{{ t.amhe[lang] }}</h2>
            <div class="small-blob">{{ t.tag_uni[lang] }}</div>
          </div>
          <p>{{ t.group_project[lang] }} 2</p>
          <h3>{{ t.description[lang] }}</h3>
          <p>
            {{ t.amhe_description[lang] }}
          </p>
          <h3>{{ t.technologies[lang] }}</h3>
          <div class="horizontal-elements">
            <div v-for="el in t.amhe_technologies" :key="el" class="h-element">
              {{ el }}
            </div>
          </div>
          <h3>{{ t.links[lang] }}</h3>
          <p>
            {{ t.source_code[lang] }}
            <a
              href="https://github.com/rvsmic/Metaheuristic-Algorithms-Uni"
              class="link"
              >{{ t.github_repo[lang] }}</a
            >
          </p>
        </section>

        <div class="spacer" />

        <section>
          <div class="flex items-center justify-between w-full">
            <h2>{{ t.tass[lang] }}</h2>
            <div class="small-blob">{{ t.tag_uni[lang] }}</div>
          </div>
          <p>{{ t.group_project[lang] }} 3</p>
          <h3>{{ t.description[lang] }}</h3>
          <p>
            {{ t.tass_description[lang] }}
          </p>
          <h3>{{ t.technologies[lang] }}</h3>
          <div class="horizontal-elements">
            <div v-for="el in t.tass_technologies" :key="el" class="h-element">
              {{ el }}
            </div>
          </div>
          <h3>{{ t.links[lang] }}</h3>
          <p>
            {{ t.source_code[lang] }}
            <a href="https://github.com/rvsmic/tass-projekt-2" class="link">{{
              t.github_repo[lang]
            }}</a>
          </p>
        </section>

        <div class="spacer" />

        <section>
          <div class="flex items-center justify-between w-full">
            <h2>{{ t.portfolio[lang] }}</h2>
            <div class="small-blob">{{ t.tag_pers[lang] }}</div>
          </div>

          <p>{{ t.solo_project[lang] }}</p>
          <h3>{{ t.description[lang] }}</h3>
          <p>
            {{ t.portfolio_description[lang] }}
          </p>
          <h3>{{ t.technologies[lang] }}</h3>
          <div class="horizontal-elements">
            <div
              v-for="el in t.portfolio_technologies"
              :key="el"
              class="h-element"
            >
              {{ el }}
            </div>
          </div>
          <h3>{{ t.links[lang] }}</h3>
          <p>
            {{ t.source_code[lang] }}
            <a href="https://github.com/rvsmic/rvsmic.github.io" class="link">{{
              t.github_repo[lang]
            }}</a>
          </p>
        </section>

        <div class="spacer" />

        <section>
          <div class="flex items-center justify-between w-full">
            <h2>{{ t.bachelors[lang] }}</h2>
            <div class="small-blob">{{ t.tag_uni[lang] }}</div>
          </div>
          <p>{{ t.solo_project[lang] }}</p>
          <h3>{{ t.description[lang] }}</h3>
          <p>
            {{ t.bachelors_description[lang] }}
          </p>
          <h3>{{ t.technologies[lang] }}</h3>
          <div class="horizontal-elements">
            <div
              v-for="el in t.bachelors_technologies"
              :key="el"
              class="h-element"
            >
              {{ el }}
            </div>
          </div>
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
          <div class="flex items-center justify-between w-full">
            <h2>{{ t.medsys[lang] }}</h2>
            <div class="small-blob">{{ t.tag_uni[lang] }}</div>
          </div>
          <p>{{ t.group_project[lang] }} 4</p>
          <h3>{{ t.description[lang] }}</h3>
          <p>
            {{ t.medsys_description[lang] }}
          </p>
          <h3>{{ t.technologies[lang] }}</h3>
          <div class="horizontal-elements">
            <div
              v-for="el in t.medsys_technologies"
              :key="el"
              class="h-element"
            >
              {{ el }}
            </div>
          </div>
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
          <div class="flex items-center justify-between w-full">
            <h2>{{ t.sudoku[lang] }}</h2>
            <div class="small-blob">{{ t.tag_pers[lang] }}</div>
          </div>
          <p>{{ t.solo_project[lang] }}</p>
          <h3>{{ t.description[lang] }}</h3>
          <p>
            {{ t.sudoku_description[lang] }}
          </p>
          <h3>{{ t.technologies[lang] }}</h3>
          <div class="horizontal-elements">
            <div
              v-for="el in t.sudoku_technologies"
              :key="el"
              class="h-element"
            >
              {{ el }}
            </div>
          </div>
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
          <div class="flex items-center justify-between w-full">
            <h2>{{ t.software_engineering[lang] }}</h2>
            <div class="small-blob">{{ t.tag_uni[lang] }}</div>
          </div>
          <p>{{ t.group_project[lang] }} 3</p>
          <h3>{{ t.description[lang] }}</h3>
          <p>
            {{ t.software_engineering_description[lang] }}
          </p>
          <h3>{{ t.technologies[lang] }}</h3>
          <div class="horizontal-elements">
            <div
              v-for="el in t.software_engineering_technologies"
              :key="el"
              class="h-element"
            >
              {{ el }}
            </div>
          </div>
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
          <div class="flex items-center justify-between w-full">
            <h2>{{ t.divcost[lang] }}</h2>
            <div class="small-blob">{{ t.tag_pers[lang] }}</div>
          </div>
          <p>{{ t.solo_project[lang] }}</p>
          <h3>{{ t.description[lang] }}</h3>
          <p>
            {{ t.divcost_description[lang] }}
          </p>
          <h3>{{ t.technologies[lang] }}</h3>
          <div class="horizontal-elements">
            <div
              v-for="el in t.divcost_technologies"
              :key="el"
              class="h-element"
            >
              {{ el }}
            </div>
          </div>
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
          <div class="flex items-center justify-between w-full">
            <h2>{{ t.ticker[lang] }}</h2>
            <div class="small-blob">{{ t.tag_pers[lang] }}</div>
          </div>
          <p>{{ t.solo_project[lang] }}</p>
          <h3>{{ t.description[lang] }}</h3>
          <p>
            {{ t.ticker_description[lang] }}
          </p>
          <h3>{{ t.technologies[lang] }}</h3>
          <div class="horizontal-elements">
            <div
              v-for="el in t.ticker_technologies"
              :key="el"
              class="h-element"
            >
              {{ el }}
            </div>
          </div>
          <h3>{{ t.links[lang] }}</h3>
          <p>
            {{ t.source_code[lang] }}
            <a href="https://github.com/rvsmic/Ticker" class="link">{{
              t.github_repo[lang]
            }}</a>
          </p>
        </section>
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
        t: translations.projects,
      };
    },
  };
</script>
