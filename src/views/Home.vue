<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" :wassup="wassup"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { wassup } from '@/utilities/home';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
  data() {
    return { wassup };
  }
})
export default class Home extends Vue {}
</script>
