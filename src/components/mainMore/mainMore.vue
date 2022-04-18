<template>
  <div v-if="searchDatas" class="background-white">
    <div class="d-flex justify-content-space-between" >
      
      <div class="line-height userInfo d-flex">
        <div class="m-1">ikon</div>
        <div>  <p>{{ searchDatas[1] }}</p>
        <p class="mapInfoColor">{{ searchDatas[5] }} , {{ searchDatas[4] }}</p> </div>
      </div>
      <div id="date" style="width:18%" class="line-height">
        <p class="mapInfoColor">{{ searchDatas[0] }}</p>
        <p>{{ searchDatas[3] }}</p>
      </div>
    
    </div>
  </div> 
  <p></p>
</template>

<script>
export default {
  props: {
    searchDatas: Array,
  },

};
</script>

<style>
.background-white {
  margin: 1rem;
  border-radius: 8px;
  background-color: white;
  padding: 15px;
  width: 45vw;
  align-items: center;
}
.background-white:hover {
  background-color: #d8e0f0;
}

</style>
