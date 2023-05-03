<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- {{title}}
  <button @click="increment">Increment</button>
  <Counter :inc="count" @msgGotReset="reset($event)"/>
  <CounterComposition :title="title" @enlarge-text="title=$event"/> -->
<!-- <br/> -->
<!-- <a href="/about">About a Tag</a> -->
<Navigation/>
<div class="container">
<!-- <router-view></router-view> -->
  <router-view v-slot="{Component}">
    <!-- <transition name="slide" mode="out-in"> -->
    <!-- <transition name="moveUp"> -->
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
  
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Counter from './components/Counter.vue'
// import CounterComposition from './components/CounterComposition.vue'
import Navigation from './views/TheNavigation.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
    // Counter,
    // CounterComposition
    Navigation
  },
  data(){
    return{
      // count:100,
      // title:"Props are passing"
    }
  },
   methods: {
        // increment:function(){
        //    this.count++
        // },
        // reset(event){
        //   console.log("received event value : ", event)
        //   this.count = event
        // }
    },
}
</script>

<style lang="css">
@import '../public/main.css';
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/

/*name="slide" mode="out-in"*/
.slide-enter-active,
.slide-leave-active{
  transition:opacity 1s, transform 1s;
}
.slide-enter-from,
.slide-leave-to{
  opacity:0;
  transform:translateX(-30%);
}
/*name="moveUp"*/
.moveUp-enter-active{
  animation:fadeIn 1s ease-in;
}
@keyframes fadeIn{
  0% {opacity:0;}
  50% {opacity:0.5;}
  100% {opacity:1;}
}
.moveUp-leave-active{
  animation:moveUp 0.3s ease-in;
}
@keyframes moveUp{
  0% {transform:translateY(0);}
  100% {transform:translateY(-400px);}
}
/*name="slide" mode="out-in"*/
.fade-enter-active,
.fade-leave-active{
  transition:opacity 0.3s;
}
.fade-enter,
.fade-leave-to{
  opacity:0
}
</style>
