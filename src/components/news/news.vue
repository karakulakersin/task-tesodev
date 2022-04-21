<template>
<div class="newsHeader">   <h3>Top News</h3>
  </div>   <div class="d-flex justify-content-center">
    <div class="m-1 d-flex flex-direction-column justify-content-center">
      <button @click="prevPage">
        <box-icon name="chevron-left"></box-icon>
      </button>
    </div>
    <div ref="container" class="d-flex cards justify-content-space-between news">
      <div class="d-flex">
        <div class="newsCard" v-for="i in 5" :key="i">
          <div><img height="300" src="@/assets/images/footerImage.png" /></div>
          <div> <strong class="font-size-16" > A Plan to Rebuild the Bus  </strong> <br> <p>{{i}} </p> </div>
        </div>
      </div>
    </div>
    <div class="m-1 d-flex flex-direction-column justify-content-center">
      <button @click="nextPage">
        <box-icon name="chevron-right"></box-icon>
      </button>
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue"
const container = ref(null)
const nextPage = () => {
  container.value.scrollLeft += 537;
};
const prevPage = () => {
  container.value.scrollLeft -= 537;
};
</script>
<style scoped>
.newsCard:not(:last-child) {
  width: 537px;
}

.cards {
  overflow: hidden;
  width: 75vw;
}
button {
  width: 50px;
  height: 50px;
  background-color: #eeeeee;
  border-radius: 50%;
  border: none;
}
button:hover {
  background-color: #657fb5;
}
.newsHeader{
    margin-left: 10%;
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 2rem;
}

</style>
