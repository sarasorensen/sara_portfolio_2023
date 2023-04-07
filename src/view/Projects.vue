<template>
  <div class="projects">
    <div class="flex-box">
      <section class="project" @click="modal1 = !modal1">
        <img
          src="../assets/starwars.png"
          alt="sortable table displaying characters in Star Wars"
        />
        <div class="heading">
          <h2>Table</h2>
        </div>
      </section>

      <section class="project" @click="modal2 = !modal2">
        <img
          src="../assets/devices.png"
          alt="sortable table displaying devices"
        />
        <div class="heading">
          <h2>Devices</h2>
        </div>
      </section>

      <section class="project" @click="modal3 = !modal3">
        <img
          src="../assets/map-pop.png"
          alt="Google maps with markers"
        />
        <div class="heading">
          <h2>Maps</h2>
        </div>
      </section>

      <section class="project" @click="modal4 = !modal4">
        <img
          src="../assets/holidaze.png"
          alt="Google maps with markers"
        />
        <div class="heading">
          <h2>Hotel</h2>
        </div>
      </section>

      <modal
        :open="modal1"
        @close="modal1 = false"
        title="Table"
       :img="'/img/starwars.f5fcaed0.png'"
        :list="[
          'Create a sortable table using API',
          'Each column must be sortable by character',
          'Table needs to be searchable',
          'Project must utilize Vue, Vuex & Sass'
        ]"
        :skills="['Vue', 'Vuex', 'SASS', 'CSS', 'SCSS', 'JavaScript']"
      />
      <modal
        :open="modal2"
        @close="modal2 = false"
        title="Devices"
        :img="'/img/devices.3feae378.png'"
        :list="[
          'Create a sortable table for devices using API',
          'Each column must be sortable by character',
          'Table needs to be searchable',
          'Needs to have a filter function above, with given filters including a filter for displaying my favorites',
          'Project must utilize Vue, Vuex & Sass'
        ]"
        :skills="['Vue', 'Vuex', 'SASS', 'CSS', 'SCSS', 'JavaScript']"
      />

      <modal
        :open="modal3"
        @close="modal3 = false"
        title="Maps"
       :img="'/img/map-pop.5c7de54f.png'"
        :list="[
          ' Implement a Google Map which displays all devices with markers on the map.',
          'The markers should be different colors depending on the devices battery percentage.',
          'The markers should be clickable, displaying name and address. There should only be one window open at a time, and any click outside the window should close it.',
        ]"
        :skills="['Map Illustration', 'Google Maps', 'Google Maps API',  'Vue', 'Vuex', 'SASS', 'CSS', 'SCSS', 'JavaScript']"
      />

      <modal
        :open="modal4"
        @close="modal4 = false"
        title="Hotel"
       :img="'/img/holidaze.74c410ee.png'"
        :list="[
          'Implement a booking page of hotels',
          'Must include a search engine',
          'The hotels should be clickable, and additional info should appear in a modal',
        ]"
        :skills="['API', 'React', 'Redux', 'SASS', 'CSS', 'SCSS', 'JavaScript']"
      />
    </div>
  </div>
</template>

<script>
import Modal from "../components/ModalItem.vue";
export default {
  name: "Projects",
  components: {
    Modal,
  },
  data() {
    return {
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
    };
  },
};
</script>
