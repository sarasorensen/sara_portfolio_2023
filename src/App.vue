<template>
  <div>
    <header-item />
    <presentation-item />
    <about-item />
    <footer-item />
  </div>
</template>

<script>
import HeaderItem from "./components/HeaderItem.vue";
import PresentationItem from "./components/PresentationItem.vue";
import AboutItem from "./components/AboutItem.vue";
import FooterItem from "./components/FooterItem.vue";
export default {
  components: {
    HeaderItem,
    PresentationItem,
    AboutItem,
    FooterItem,
  },
};
</script>
<style>
@import "../../styles/main.css";
</style>
