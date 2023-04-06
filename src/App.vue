<template>
  <div>
    <header-item />
    <router-view />
    <footer-item />
  </div>
</template>

<script>
import HeaderItem from "./components/HeaderItem.vue";
import PresentationItem from "./components/PresentationItem.vue";
import FooterItem from "./components/FooterItem.vue";
export default {
  components: {
    HeaderItem,
    PresentationItem,
    FooterItem,
  },
};
</script>
<style>
@import "../../styles/main.css";
</style>
