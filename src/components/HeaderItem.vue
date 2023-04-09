<template>
  <header class="sidemenu" ref="target">
    <h2 class="logo" @click="home">Sara</h2>
    <button
      class="sidemenu__btn"
      v-on:click="navOpen = !navOpen"
      aria-label="Menu"
      v-bind:class="{ active: navOpen }"
    >
      <span class="top"></span>
      <span class="mid"></span>
      <span class="bottom"></span>
    </button>

    <transition name="translateX" >
      <nav v-show="navOpen">
        <div class="sidemenu__wrapper">
          <ul class="sidemenu__list">
            <li class="sidemenu__item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="sidemenu__item">
              <router-link to="/contact">Contact</router-link>
            </li>
            <li class="sidemenu__item">
              <router-link to="/projects">Portfolio</router-link>
            </li>
            <li class="sidemenu__item">
              <router-link to="/resume">Resume</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </transition>
  </header>
</template>

<script>
export default {
  name: "HeaderItem",
  data() {
    return {
      navOpen: false,
    };
  },
  methods: {
    home() {
      this.$router.push("/");
    },
  },
  mounted() {
    let self = this;
    document.addEventListener("click", (e) => {
 
      if (
        self.navOpen == true &&
        self.$refs.target !== null &&
        self.$refs.target !== undefined &&
        self.$refs.target.contains(e.target) === false
      ) {
        self.navOpen = false;
      }
    });
  },
  watch: {
    $route(newVal) {
      if (newVal) {
        this.navOpen = false;
      }
    },
  },
};
</script>
