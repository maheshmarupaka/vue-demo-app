<template lang="">
    <div class="home">
        <h1>All Destinations</h1>
        <div class="destinations">
        <!-- {{sourceData.destinations[0].name}} -->
        <!-- :to="`destination/${destination.id}`" -->
        <router-link v-for="destination in sourceData.destinations" 
        :key="destination.id"
        :to="{name:'destination.show',params:{id:destination.id,slug:destination.slug}}"> 
            <h2>{{destination.name}}</h2>
            <img :src="`/images/${destination.image}`" :alt="destination.name" />
        </router-link>
        </div>
    </div>
</template>
<script setup>
import sourceData from '@/data.json'
// export default {
//     data(){
//         return{
//             destinations:sourceData.destinations
//         }
//     }
// }
</script>
<style lang="">
    
</style>