<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { attestationPdf } from "./data/pdf/BaseModel";
import { ref } from "vue";
const dataValue = {
  name: "Direct Agence",
  police: "100000522",
  rc: 1000,
  incendie: 200,
  dr: 4056,
  dom: 8956,
  vol: 5412,
  bg: 4597,
  dateDebut: "20/05/2024",
  dateFin: "20/05/2024",
  genre: "M",
  type: "Auto",
  marque: "Toyota",
  immat: "AASD50",
  id: 1536974,
  numberPolice: 5003697,
  infos: 'Jon Doe Libreville Gabon '
};
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <button @click.prevent="attestationPdf(dataValue)">
    <span>Clique ici</span>
  </button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
