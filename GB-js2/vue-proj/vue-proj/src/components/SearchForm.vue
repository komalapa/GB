<template>
  <form action="#" class="search" v-on:submit.prevent="search">
                <input type="text" id="search-input" v-bind:value="this.searchLine"
                v-on:input="$emit('input', $event.target.value)">
                <button v-on:click="search" class="search-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22"
                        height="22" viewBox="0 0 26 26">
                        <path fill-rule="evenodd"
                            d="M23.51477,22.871792 C23.51477,22.871792 22.870789,23.515156 22.870789,23.515156 C22.22406,24.161343 21.175537,24.161343 20.52887,23.515156 C20.52887,23.515156 16.477356,19.467545 16.477356,19.467545 C15.023132,20.377842 13.303833,20.904713 11.461182,20.904713 C6.235901,20.904713 1.9998779,16.672718 1.9998779,11.452278 C1.9998779,6.2318344 6.235901,1.9998417 11.461182,1.9998417 C16.686523,1.9998417 20.922485,6.2318344 20.922485,11.452278 C20.922485,13.303993 20.389038,15.030983 19.468079,16.489124 C19.468079,16.489124 23.51477,20.532001 23.51477,20.532001 C24.161499,21.178185 24.161499,22.225723 23.51477,22.871792 ZM11.461182,4.615925 C7.682068,4.615925 4.618408,7.67667 4.618408,11.452278 C4.618408,15.227882 7.682068,18.288628 11.461182,18.288628 C15.240356,18.288628 18.304016,15.227882 18.304016,11.452278 C18.304016,7.67667 15.240356,4.615925 11.461182,4.615925 Z" />
                    </svg>
                </button>
            </form>
</template>

<script>
export default {
  name: 'SearchForm',
  methods:{
            search: function(){
                this.$parent.filter(); //не уверена, что решение правильное, но оно позволяет использовать любой "поиск" из родительского приложения
                //console.log(this.$parent);
                //this.filter();
            }
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.search {
    position: relative;
}

#search-input {
    width: 434px;
    height: 31px;
    background-color: #ffffff;
    border: 1.0px solid #3cc3b5;
    padding-left: 5px;
    padding-right: 46px;
    box-sizing: border-box;
    color: #3cc3b5;
}

.search-btn {
    background-color: #ffffff;
    border: none;
    position: absolute;
    top: 2px;
    right: 1px;
    fill: #e3e3e3;
    outline: none;
}

.search-btn:hover svg {
    fill: #3cc395;
}

.search-btn:active svg {
    fill: #afafaf;
}

</style>
