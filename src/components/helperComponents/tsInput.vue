<template>
  <div> <input  :type="inputType" :placeholder="placeholder"/> </div>
</template>

<script>
export default {
props : {
    placeholder: String,
    maxLength:Number,
    minLenght:Number,
    inputType:String,
  }
}
</script>

<style>
input {
        width: 35vw;
        height: 40px;
        border-radius: 12px;
        padding: 5px 10px;
        border: 2px solid;
}   
input:hover{
    background-color:#F0F0F0;
    border: 2px solid;
    border-color:#909090
}
input::-moz-placeholder {
  color: #B1B1B1;
  opacity: 1;
}
input:-ms-input-placeholder {
  color: #B1B1B1;
}
input::-webkit-input-placeholder {
  color: #B1B1B1;
}
</style>