<template>
<div v-if="!showMore && !addData"> 

<mainSearchPage/>
      </div>
<div v-if="showMore"> <mainSearchMore/> </div>
<div v-if="addData" >     <mainAddData/>
 </div>
</template>
<script setup>
import {ref,provide} from "vue"
import mainSearchPage from "../components/mainPage/mainSearchPage.vue"
import mainAddData from "../components/mainPage/mainAddData.vue"
import mainSearchMore from "../components/mainPage/mainSearchMore.vue"
const searchKey=ref("")
const addData= ref(false)
const showMore = ref(false)
const showMoreDetails = () => {
if(searchKey.value.length>1) {
    showMore.value=true
    addData.value=false}
}
const addDataScreen = () => {
    addData.value=true
    showMore.value=false
}
const backToList = () => {
    addData.value=false
    searchKey.value=""
}
provide('searchKey',searchKey)
provide('backToList',backToList)
provide('showMoreDetails',showMoreDetails)
provide('addDataScreen',addDataScreen)
</script>