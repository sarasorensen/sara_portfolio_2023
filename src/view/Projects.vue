<template>
  <div class="projects">
    <div class="heading heading__orange">
          <h1>Portfolio</h1>
        </div>
    <div class="flex-box">

      <section class="project" @click="modalIdx(2)">
        <div class="img-wrap">
        <img
          src="../assets/devices.png"
          alt="sortable table displaying devices"
        />
        </div>
        <div class="heading heading__bckg">
          <h2>Devices</h2>
        </div>
      </section>

      <section class="project" @click="modalIdx(3)">
        <div class="img-wrap">
        <img
          src="../assets/map-pop.png"
          alt="Google maps with markers"
        />
        </div>
        <div class="heading heading__bckg">
          <h2>Maps</h2>
        </div>
      </section>

      <section class="project" @click="modalIdx(5)">
        <div class="img-wrap">
        <img
          src="../assets/onboarding.png"
          alt="Image of form input for device onboarding"
        />
        </div>
        <div class="heading heading__bckg" >
          <h2>Onboarding</h2>
        </div>
      </section>

      <section class="project" @click="modalIdx(6)">
        <div class="img-wrap">
        <img
          src="../assets/chartJs.png"
          alt="Chart displaying calendar and volume"
        />
        </div>
        <div class="heading heading__bckg">
          <h2>Chart JS</h2>
        </div>
      </section>

      <section class="project" @click="modalIdx(1)">
        <div class="img-wrap">
          <img
          src="../assets/starwars.png"
          alt="sortable table displaying characters in Star Wars"
        />
        </div>

        <div class="heading heading__bckg">
          <h2>Table</h2>
        </div>
      </section>


      <section class="project" @click="modalIdx(9)">
        <div class="img-wrap">
          <img
          src="../assets/json.png"
          alt="Json editor"
        />
        </div>

        <div class="heading heading__bckg">
          <h2>JSON editor</h2>
        </div>
      </section>

      <section class="project" @click="modalIdx(8)">
        <div class="img-wrap">
          <img
          src="../assets/characters.png"
          alt="Graphic illustrations of characters from game of thrones"
        />
        </div>

        <div class="heading heading__bckg">
          <h2>Graphics</h2>
        </div>
      </section>


      <section class="project" @click="modalIdx(4)">
        <div class="img-wrap">
        <img
          src="../assets/holidaze.png"
          alt="Google maps with markers"
        />
        </div>
        <div class="heading heading__bckg">
          <h2>Hotel</h2>
        </div>
      </section>

      <modal
      :open="current == 1"
        @close="current = false"
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
      :open="current == 2"
        @close="current = false"
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
      :open="current == 3"
        @close="current = false"
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
      :open="current == 4"
        @close="current = false"
        title="Hotel"
       :img="'/img/holidaze.74c410ee.png'"
        :list="[
          'Implement a booking page of hotels',
          'Must include a search engine',
          'The hotels should be clickable, and additional info should appear in a modal',
        ]"
        :skills="['API', 'React', 'Redux', 'SASS', 'CSS', 'SCSS', 'JavaScript']"
      />

      <modal
      :open="current == 5"
        @close="current = false"
        title="Onboarding"
       :img="'/img/onboarding.9d96c729.png'"
        :list="[
          'Implement onboarding for devices & sensors to be used by assemblers in field',
          'Master id & sensor id must match query in api providing all existising ids',
          'Assembler should not be able to go to next step if input is lacking or wrong',
        ]"
        :skills="['API', 'Vue', 'Onboarding', 'SASS', 'CSS', 'SCSS', 'JavaScript']"
      />

      <modal
      :open="current == 6"
        @close="current = false"
        title="Chart JS"
       :img="'/img/chartJs.3828d0a2.png'"
        :list="[
          'Implement chart displaying liquid content of devices',
          'Must be sortable by date selected in dropdown calendar',
          'Must be downloadable as a PDF file',
        ]"
        :skills="['API', 'Vue', 'ChartJS', 'SASS', 'CSS', 'SCSS', 'JavaScript', 'PDF']"
      />
   

      <modal
      :open="current == 8"
        @close="current = false"
        title="Graphics"
       :img="'   /img/characters.7d911661.png'"
        :list="[
          'Create characters from Game Of Thrones using Illustrator',
          'The graphic illustrations should be possible to use as a token in an online board game',
          'Less than 9kb in size',
          'Must not infringe copyrights',
        ]"
        :skills="['Illustrator', 'Graphic Design', 'User Experience', 'UX']"
      />

      <modal
        :open="current == 9"
        @close="current = false"
        title="JSON editor"
       :img="'/img/json.6c93ced3.png'"
        :list="[
          'Create a JSON editor for admin users',
          'Editor must display data from provided API',
          'Changes in editor should be saved and change previous data from said API',
          'Must be responsive',
        ]"
        :skills="['Vue', 'JSON', 'JSON editor', 'JavaScript', 'CSS', , 'SCSS', , 'SASS', 'Responsive Design', 'UX/ UI']"
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
      current: 0,
    };
  },
  methods: {
    modalIdx(index){
      this.current = index;
    }
  }
};
</script>
