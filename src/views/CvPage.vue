<template>
  <PageTitle :title="t.pagetitle[lang]" />

  <main>
    <div class="small-spacer" />
    <div>
      <button @click="downloadCv">{{ t.button[lang] }}</button>
    </div>
    <div>
      <section v-for="el in cvElements" :key="el.title">
        <div class="spacer" />
        <h2>{{ el.title }}</h2>
        <ul>
          <li v-for="subEl in el.elements" :key="subEl.title">
            <h3>{{ subEl.title }}</h3>
            <p v-for="subSubEl in subEl.vertical_elements" :key="subSubEl">
              <span v-if="Array.isArray(subSubEl)">
                <ul>
                  <li v-for="subSubSubEl in subSubEl" :key="subSubSubEl">
                    * {{ subSubSubEl }}
                  </li>
                </ul>
              </span>
              <span v-else>{{ subSubEl }}</span>
            </p>
            <div class="horizontal-elements">
              <div
                v-for="subSubEl in subEl.horizontal_elements"
                :key="subSubEl"
                class="h-element"
              >
                {{ subSubEl }}
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
    <div class="spacer" />
  </main>
</template>

<script>
  import translations from "@/assets/translations.json";
  import PageTitle from "@/components/PageTitle.vue";
  import cvData from "@/assets/cvData.json";
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
        t: translations.cv,
        cvElements: cvData[this.lang],
        cvAgreement: cvData.other.agreement[this.lang],
        cvAbout: cvData.other.about[this.lang],
        cvContact: cvData.other.contact[this.lang],
      };
    },
    methods: {
      downloadCv() {
        const path =
          this.lang === "en" ? "src/assets/cv-en.pdf" : "src/assets/cv-pl.pdf";

        fetch(path)
          .then((response) => {
            if (!response.ok) {
              alert(
                "Błąd podczas pobierania pliku. Plik CV dostępny jest również na moim LinkedIn :)"
              );
            }
            return response.blob();
          })
          .then((blob) => {
            const url = URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = "CV_Michal_Rusinek.pdf";
            document.body.appendChild(a);
            a.click();

            a.remove();
            URL.revokeObjectURL(url);
          })
          .catch((error) => {
            alert(
              "Błąd podczas pobierania pliku. Plik CV dostępny jest również na moim LinkedIn :)"
            );
          });
      },
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
