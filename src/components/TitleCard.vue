<template>
  <div class="home">
    <h1>Michał Rusinek</h1>
    <h2>
      <span>{{ displayedText }}</span
      ><span class="cursor">|</span>
    </h2>
  </div>
</template>

<script>
  import translations from "@/assets/translations.json";

  export default {
    props: {
      lang: {
        type: String,
        default: "en",
      },
    },
    data() {
      return {
        t: translations.home,
        displayedText: "",
        currentSubtitleIndex: 0,
        isDeleting: false,
        typewriterTimeout: null,
        typingSpeed: 100,
        deletingSpeed: 50,
        pauseEnd: 2000,
        pauseStart: 500,
      };
    },
    watch: {
      lang() {
        clearTimeout(this.typewriterTimeout);
        this.currentSubtitleIndex = 0;
        this.displayedText = "";
        this.isDeleting = false;
        this.typewriterEffect();
      },
    },
    mounted() {
      this.typewriterEffect();
    },
    beforeUnmount() {
      clearTimeout(this.typewriterTimeout);
    },
    methods: {
      typewriterEffect() {
        const currentSubtitles = this.t.subtitle[this.lang];
        const fullText = currentSubtitles[this.currentSubtitleIndex];

        if (this.isDeleting) {
          this.displayedText = fullText.substring(
            0,
            this.displayedText.length - 1,
          );
        } else {
          this.displayedText = fullText.substring(
            0,
            this.displayedText.length + 1,
          );
        }

        let typeSpeed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

        if (!this.isDeleting && this.displayedText === fullText) {
          typeSpeed = this.pauseEnd;
          this.isDeleting = true;
        } else if (this.isDeleting && this.displayedText === "") {
          this.isDeleting = false;
          this.currentSubtitleIndex =
            (this.currentSubtitleIndex + 1) % currentSubtitles.length;
          typeSpeed = this.pauseStart;
        } else if (!this.isDeleting) {
          typeSpeed = this.typingSpeed - Math.random() * 50;
        }

        this.typewriterTimeout = setTimeout(this.typewriterEffect, typeSpeed);
      },
    },
  };
</script>


