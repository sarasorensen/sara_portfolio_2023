<template>
  <div>
    <section class="presentation">
      <div class="bg"></div>

      <div>
        <h1>Sara Sørensen</h1>
        <h2>Front-end developer</h2>
        <p class="descr">
          Working with the tecnology where visual design meets coding
        </p>
        <p class="descr">UX/UI | Web design | Front end</p>
        <div class="btn-row">
          <a
            href="https://www.linkedin.com/in/sara-s%C3%B8rensen-7b0711179/"
            target="_blank"
            ><i
              class="fa fa-linkedin-square"
              style="font-size: 1.5em"
              area-label="linkedin icon"
            ></i
          ></a>
          <a
            href="https://github.com/sarasorensen/portfolio_front-end_sara"
            target="_blank"
            ><i
              class="fa fa-github"
              style="font-size: 1.5em"
              area-label="github icon"
            ></i
          ></a>
          <a href="mailto:sarasorensen97@hotmail.com" target="_blank"
            ><i
              class="fa fa-envelope"
              style="font-size: 1.5em"
              area-label="email icon"
            ></i
          ></a>
        </div>
      </div>
    </section>
    <about-item />
  </div>
</template>

<script>
import AboutItem from "./AboutItem.vue";

export default {
  name: "PresentationItem",
  components: {
    AboutItem,
  },
};
</script>
