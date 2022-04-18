<template>
<div>
  <mainPage/>
</div>
</template>

<script setup>
import {onMounted} from "vue"
import axios from "axios";
import { useStore } from "vuex";
const store = useStore();

import mainPage from "./views/mainPage.vue"
onMounted(() => {
    axios.get("http://localhost:3000/data").then((response) => {
    let allData = response.data;
    store.dispatch("setAllData",allData)
    localStorage.setItem("allData", allData);
  });
});
</script>

<style>

</style>
