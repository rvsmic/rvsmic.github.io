<template>
  <div>
    <PageTitle :title="t.pagetitle[lang]" />
    <main>
      <div>
        <button @click="downloadCv">{{ t.button[lang] }}</button>
      </div>
      <div>
        <section v-for="el in cvElements" :key="el.title">
          <div class="spacer" />
          <h2>{{ el.title }}</h2>
          <ul>
            <li
              v-for="(subEl, index) in el.elements"
              :key="subEl.title || subEl.company || index"
            >
              <template v-if="subEl.company">
                <h3 class="mb-1">{{ subEl.company }}</h3>
                <p class="mb-4">{{ subEl.location }}</p>

                <div class="timeline-container">
                  <div class="timeline-line"></div>
                  <div
                    v-for="role in subEl.elements"
                    :key="role.title"
                    class="timeline-item"
                  >
                    <div class="timeline-dot"></div>

                    <h4>{{ role.title }}</h4>
                    <template
                      v-for="(subSubEl, roleIdx) in role.vertical_elements"
                      :key="roleIdx"
                    >
                      <ul v-if="Array.isArray(subSubEl)" class="blob-list">
                        <li v-for="subSubSubEl in subSubEl" :key="subSubSubEl">
                          {{ subSubSubEl }}
                        </li>
                      </ul>
                      <p v-else>{{ subSubEl }}</p>
                    </template>
                    <div
                      class="horizontal-elements mt-2"
                      v-if="role.horizontal_elements"
                    >
                      <div
                        v-for="subSubEl in role.horizontal_elements"
                        :key="subSubEl"
                        class="h-element"
                      >
                        {{ subSubEl }}
                      </div>
                    </div>
                  </div>
                </div>
              </template>

              <template v-else>
                <h3>{{ subEl.title }}</h3>
                <template
                  v-for="(subSubEl, subIdx) in subEl.vertical_elements"
                  :key="subIdx"
                >
                  <ul v-if="Array.isArray(subSubEl)" class="blob-list">
                    <li v-for="subSubSubEl in subSubEl" :key="subSubSubEl">
                      {{ subSubSubEl }}
                    </li>
                  </ul>
                  <p v-else>{{ subSubEl }}</p>
                </template>
                <div
                  class="horizontal-elements mt-2"
                  v-if="subEl.horizontal_elements"
                >
                  <div
                    v-for="subSubEl in subEl.horizontal_elements"
                    :key="subSubEl"
                    class="h-element"
                  >
                    {{ subSubEl }}
                  </div>
                </div>
              </template>
            </li>
          </ul>
        </section>
      </div>
      <div class="small-spacer" />
    </main>
  </div>
</template>

<script>
  import translations from "@/assets/translations.json";
  import PageTitle from "@/components/PageTitle.vue";
  import cvData from "@/assets/cvData.json";
  import { generateCvPdf } from "@/utils/generateCvPdf";

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
        t: translations.cv,
      };
    },
    computed: {
      cvElements() {
        return cvData[this.lang];
      },
      cvAgreement() {
        return cvData.other.agreement[this.lang];
      },
      cvAbout() {
        return cvData.other.about[this.lang];
      },
      cvContact() {
        return cvData.other.contact[this.lang];
      },
    },
    methods: {
      downloadCv() {
        try {
          generateCvPdf(
            cvData[this.lang],
            this.lang,
            cvData.other.contact[this.lang],
            cvData.other.agreement[this.lang],
            cvData.other.about[this.lang]
          );
        } catch (error) {
          console.error("Failed to generate PDF:", error);
          alert(this.t.download_error[this.lang]);
        }
      },
    },
  };
</script>
