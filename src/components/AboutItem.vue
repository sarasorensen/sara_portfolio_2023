<template>
  <section class="about">
    <div class="about__info">
      <div class="heading">
        <h2>About me</h2>
      </div>
      <p>
        I have a higher professional degree in Front-end Development, as well as
        entrance qualifications with Media & Communication.
      </p>
      <p>
        From my job experience and education, I have knowledge of
        <span class="cta__inline">JavaScript</span>,
        <span class="cta__inline">Vue.js</span>,
        <span class="cta__inline">React</span> and
        <span class="cta__inline">SASS</span>. In addition to these programming
        languages, I have experience within graphic design using
        <span class="cta__inline">Adobe XD</span> and
        <span class="cta__inline">Illustrator</span>.
      </p>
      <p>
        In my current role, I implemented changes that made their app
        accessible, responsive, and more. I got to experience first-hand the
        fast pace of a startup company, where we created advanced new solutions
        for different markets.
      </p>
      <p>
        For collaboration with the team, I have experience with platforms such
        as <span class="cta__inline">Jira</span>,
        <span class="cta__inline">GitHub</span>,
        <span class="cta__inline">Bitbucket</span> and
        <span class="cta__inline">Confluence</span>.
      </p>
      <button class="btn" @click="goToResume">See resume</button>
    </div>
    <img
      src="../assets/profileImg.jpeg"
      alt="portrait of a woman with brown hair"
    />
  </section>
</template>

<script>
export default {
  name: "AboutItem",
  methods: {
    goToResume(){
        this.$router.push('/resume')
    }
  }
};
</script>
