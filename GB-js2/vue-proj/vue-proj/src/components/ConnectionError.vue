<template>
  <div class="error-not-connected" v-if="!gl.goods.length"><slot></slot></div>
</template>

<script>
export default {
  name: 'ConnectionError',
  props: {
    gl: Object,
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.error-not-connected{
    width: 100%;
    color:red;
    background-color: #3cc3b5;
    
    padding: 20px 10px;
    opacity: 0.5;
    box-sizing: border-box;
    text-align: center;

}
</style>
