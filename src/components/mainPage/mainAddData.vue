<template>
  <div class="d-flex align-items-center m-2 p-l-1">
    <img src="https://www.tesodev.com/getimg/5d4c76e7de632812d86a5bf2/194" />
    <box-icon color="#484848" class="m-l-1" name="left-arrow-alt"></box-icon>
    <a @click="backToList" class="addPageColor">Return to List Page</a>
  </div>
  <div
    class="d-flex justify-content-center flex-direction-column width-75 height-60 align-items-center"
  >
    <div>
      <div class="m-1">
        <p class="addPageInputColor mb-0-5 mb-0-3">Name Surname</p>
        <input
          ref="nameInput"
          v-model="userArray[0]"
          minLenght="4"
          maxlength="60"
          required
          onkeypress="return /[a-z]/i.test(event.key)"
          placeholder="Enter name and surname"
        />
        <p ref="nameAlert" class="display-none" style="color:red" > Ad 4 haneden küçük olamaz.  </p>
      </div>
      <div class="m-1">
        <p class="addPageInputColor mb-0-5 mb-0-3">Country</p>
        <input
          required
          ref="countryInput"
          v-model="userArray[4]"
          maxlength="40"
          onkeypress="return /[a-z]/i.test(event.key)"
          placeholder="Enter a country"
        />
        <p ref="countryAlert"  class="display-none" style="color:red" > Ülke 2 haneden küçük olamaz.  </p>
      </div>
      <div class="m-1">
        <p class="addPageInputColor mb-0-5 mb-0-3">City</p>
        <input
          ref="cityInput"
          required
          maxlength="40"
          v-model="userArray[5]"
          onkeypress="return /[a-z]/i.test(event.key)"
          placeholder="Enter a city"
        />
        <p ref="cityAlert" class="display-none" style="color:red" > Şehir 2 haneden küçük olamaz.  </p>
      </div>
      <div class="m-1">
        <p class="addPageInputColor mb-0-5 mb-0-3">Email</p>
        <input
          required
          ref="mailInput"
          type="mail"
          v-model="userArray[2]"
          placeholder="Enter a e-mail (abc@xyz.com)"
        />
        <p ref="mailAlert" class="display-none" style="color:red" > asdgasd  </p>
      </div>

      <div class="d-flex mt-1 mr-1 justify-content-end">
        <button @click="addUser" :disabled="activeButton" :class="(!activeButton ? 'activeButton' : 'passiveButton')"> Add </button> 
      
      </div>
    </div>
  </div>
  <div v-if="isAlertActive">
    
    <tsAlert :message="message" :result="result" />
  </div>
</template>
<script setup>
import { inject, ref, provide, computed } from "vue";
import { useStore } from "vuex";
const isAlertActive = ref(false);
const message = ref("");
const result = ref(false);
const userArray = ref(["", "TESODEV", "", "08/05/2021", "", ""]);
const store = useStore();
const nameAlert=ref(null)
const nameInput= ref(null)
const cityAlert=ref(null)
const cityInput=ref(null)
const countryAlert=ref(null)
const countryInput=ref(null)
const mailAlert=ref(null)
const mailInput=ref(null)
import tsAlert from "../helperComponents/tsAlert.vue";
const activeButton = computed(() => {
  if(userArray.value[0].length>1 && userArray.value[2].length>=1 && userArray.value[4].length>=1 && userArray.value[5].length>1) return false 
  else return true
})
const clearAlert = () => {
    nameAlert.value.classList.remove("d-flex")
    nameInput.value.classList.remove("borderAlert")
    cityAlert.value.classList.remove("d-flex")
    countryInput.value.classList.remove("borderAlert")
    countryAlert.value.classList.remove("d-flex")
    cityInput.value.classList.remove("borderAlert")
    mailAlert.value.classList.remove("d-flex")
    mailInput.value.classList.remove("borderAlert")
}
const addUser = () => {
  clearAlert()
  if (userArray.value[0].length < 4) {
    console.log("Ad 4 haneden küçük olamaz.");
    isAlertActive.value = true;
    message.value = "Ad 4 haneden küçük olamaz.";
    result.value = false;
    nameAlert.value.classList.add("d-flex");
    nameInput.value.classList.add("borderAlert");
    setTimeout(() => {isAlertActive.value=false}, 2000);
  } else if (userArray.value[4].length < 2) {
    console.log("Ülke 2 haneden küçük olamaz.");
    isAlertActive.value = true;
    message.value = "Ülke 2 haneden küçük olamaz.";
    result.value = false;
    countryAlert.value.classList.add("d-flex");
    countryInput.value.classList.add("borderAlert")
    setTimeout(() => {isAlertActive.value=false}, 2000);
  } else if (userArray.value[5].length < 2) {
    console.log("Şehir 2 haneden küçük olamaz.");
    isAlertActive.value = true;
    message.value = "Şehir 2 haneden küçük olamaz.";
    result.value = false;
    cityInput.value.classList.add("borderAlert")
    cityAlert.value.classList.add("d-flex");
    setTimeout(() => {isAlertActive.value=false}, 2000);
  } else {
    store.dispatch("addAllData", userArray.value);
    isAlertActive.value = true;
    message.value = "Başarılı";
    result.value = "true";
    console.log(userArray.value)
    userArray.value=["", "TESODEV", "", "08/05/2021", "", ""]
    clearAlert()
    setTimeout(() => {isAlertActive.value=false}, 2000);
  }
    
};
const isAlertClosed = () => {
  isAlertActive.value = false;
}
const backToList = inject("backToList");
provide("isAlertClosed", isAlertClosed);
</script>
<style>
.activeButton{
  margin: 0;
  padding: .5rem 2rem;
  align-items: center;
  border-radius: .6rem;
  background: #204080;
  color: white;
  border: none;
  cursor: pointer;
  transition: 0.2s linear;
}
.activeButton:hover{
  background: #4F75C2
}
.passiveButton{
  margin: 0;
  padding: .6rem 2.2rem;
  align-items: center;
  border-radius: .6rem;
  background: #204080;
  color: white;
  border: none;
  transition: 0.2s linear;
}
.passiveButton:hover{
  background: #204080
}
.borderAlert {
  border: 2px solid red !important;
}
</style>
