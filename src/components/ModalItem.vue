<template>
  <div id="myModal" class="modal" v-if="open" @click="close">
    <div class="modal-content" @click.stop>
      <span class="close" @click="close">&times;</span>
      <div class="heading">
        <h2>{{ title }}</h2>
      </div>

      <img :src="img" alt="image of project" class="modal-img"/>
      <h4>Skills and deliverables</h4>
      <div class="skills">
        <span class="badge" v-for="li in skills" :key="li">{{ li }}</span>
      </div>
      <h4>Project description</h4>
      <ul v-for="li in list" :key="li" class="modal-ul">
        <li>- {{ li }}</li>
      </ul>
      <hr />
    </div>
  </div>
</template>
<script>
export default {
  name: "modal",
  props: {
    open: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    img: {
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
    skills: {
      type: Array,
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
  watch: {
    img(newVal, oldVal) {
      console.log(newVal, oldVal);
    },
  },
};
</script>

