<template>
  <div v-if="isDeleted" class="alertMain">
    <div class="alertContent d-flex">
      <div>
        <p> {{ result ? "Success! Added link element." : "Error while adding link element" }} </p>
        <p>{{ message }}</p>
      </div>

      <div>
        <div>
          <a style="cursor: pointer"><box-icon name='x'></box-icon> </a>
        </div>
        <div :class="result ? 'successContent' : 'errorContent'">
          <span> {{ result ? "Success" : "Error" }} </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isDeleted: true,
    };
  },
  props: {
    message: String,
    result: Boolean,
  },
  methods: {
    contentDeleted() {
      this.isDeleted = false;
      console.log(this.isDeleted);
    },
  },
  
};
</script>
<style scoped>
.alertMain {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 20vh;
}
.alertContent {
    
  display: flex;
  justify-content: space-between;
  background-color: #c4c4c4;
  width: 375px;
  height: 123px;
  margin: 2rem;
  border-radius: 8px;
  padding: 1rem;
}
.errorContent {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #ff4e78;
  width: 70px;
  height: 32px;
  display: flex;
  align-items: center;
    color: white;
      border-radius: 8px;

}
.successContent {
  margin-top: 1rem;
  padding: 1rem;
  background-color: green;
  height: 32px;
  display: flex;
  border-radius: 8px;
  align-items: center;
  color: white;
}
</style>
