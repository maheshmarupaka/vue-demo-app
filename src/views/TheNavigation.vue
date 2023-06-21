<template lang="">
    <div id="nav">
    <router-link id="logo" to="/">Travel App</router-link>
    <router-link v-for="destination in sourceData.destinations" 
    :key="destination.id"
    :to="{name:'destination.show',params:{id:destination.id,slug:destination.slug}}"> 
    {{destination.name}}
    </router-link>
    <router-link :to="{name:'protected'}">Dashboard</router-link>
    <router-link :to="{name:'pinia'}">Pinia</router-link>
    <router-link to="/table">Table</router-link>
    <router-link to="/vue-data-table">Vue DataTable</router-link>
    </div>
</template>
<script setup>
import sourceData from '@/data.json'
// export default {
    
// }
</script>
<style lang="css">
    /*#nav .vue-spa-active-link{
        color:red;
        border-bottom:1px solid red;
    }*/
</style>