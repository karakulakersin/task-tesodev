<template>
  <div class="mainBackGround">
    <div class="justify-content-end d-flex row align-items-center m-2 p-l-1">
      <div class="col-2">
        <tsButton :buttonFunction="addDataScreen" buttonText="Add new record" />
      </div>
      <div>
        <div
          class="logo justify-content-center flex-direction-column align-items-center d-flex"
        >
          <div>
            <img
              height="100"
              src="https://www.tesodev.com/getimg/5d4c76e7de632812d86a5bf2/194"
            />
          </div>
          <p class="d-flex justify-content-end">Search app</p>
        </div>
      </div>
    </div>
   
    <div class="searchArea d-flex flex-direction-column align-items-center">
      <h2 class="d-flex justify-content-start">Find in records</h2>
      <div class="d-flex">
        <input v-model="searchKey" placeholder="Search a user..." />
        <tsButton class="p-l-1" :buttonFunction="showMoreDetails" buttonText="Search" />
      </div>
    </div> 
    <div class="resultArea">
      <div class="results">
        <mainMore :searchDatas="data" v-for="(data,index) in searchThreeDatas" :key="index"  /> 
        <a v-if="searchDatas.length>3" @click="showMoreDetails" class="justify-content-center d-flex m-1">
          Show more...
        </a>
      </div>
    </div>
  </div>
   <div> <news/> </div>
    <div>  <footers/> </div>
</template>
<script setup>
import { inject, onMounted, ref,watch,computed } from "vue";
import {useStore} from "vuex";
import news from "../news/news.vue" 
import footers from "../footer/footers.vue" 
import mainMore from "../mainMore/mainMore.vue";
import tsButton from "../helperComponents/tsButton.vue";
const store = useStore()
const searchDatas=ref([])
const searchThreeDatas=ref([])
const searchKey = inject("searchKey");
const showMoreDetails = inject("showMoreDetails");
const addDataScreen = inject("addDataScreen");
 const allData = computed(() => {
    return store.getters["getAllData"]
  }) 
  
watch(searchKey, ()  => {
     if(searchKey.value.length>=2) {
        searchDatas.value=[]
        searchData()
        store.dispatch("setSearchData",searchDatas.value)
        if(searchDatas.value.length>3) {
            searchThreeDatas.value=searchDatas.value.slice(0,3)
        }
        else searchThreeDatas.value=searchDatas.value
     }
     else searchDatas.value=[]
})
const searchData = () => {
 allData.value.forEach(function (data) {
   const isSearching=   data[0].toLowerCase().includes(searchKey.value.toLowerCase());
   if(isSearching) searchDatas.value.push(data)
  }

  ); 
};

onMounted(() => {
});
</script>
<style scoped>
.logo {
  height: 20vh;
}
.resultArea {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.results {
  border: 1px solid black;
  border-radius: 30px;
  margin: 1rem 0rem;
  height: auto;
  align-items: center;
  justify-content: center;
}
</style>
 