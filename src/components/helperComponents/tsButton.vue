<template>
    <div> <button  @click="buttonFunction"> {{buttonText}} </button></div>
</template>


<script>
export default {
    props : {
    buttonText: String,
    buttonFunction: Function,
    }
}

</script>

<style scoped>
button{
  width: 100%;
  margin: 0;
  padding: .6rem 2.2rem;
  align-items: center;
  border-radius: .6rem;
  background: #204080;
  color: white;
  border: none;
  cursor: pointer;
  transition: 0.2s linear;
}
button:hover {
    background: #4F75C2
}
</style>