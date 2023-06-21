<template lang="">
    <div>
    <button @click="loadDestinations">destinations</button>
        <div v-if="!get_destinations.destinations">Loading....</div>
        <ul v-else>
            <li v-for="destination in get_destinations.destinations" :key="destination.id">
               {{destination.name}}
            </li>
        </ul>
        <div v-for="item in destinations.destinations" :key="item.id">{{item.slug}} - {{item.image}}</div>
        <button @click="decrement">-</button><span>{{count}}</span><button @click="increment">+</button>
    </div>
</template>
<script setup>
import {useProductStore} from '@/stores/productStore'
import {storeToRefs} from 'pinia'
const {destinations,get_destinations,count} = storeToRefs(useProductStore());
// const productStore = useProductStore();
// count.value = 2
const {mutate_destinations} = useProductStore();
// mutate_destinations()
const loadDestinations = ()=>{
    mutate_destinations()
}
const increment = ()=>{
    count.value++
}
const decrement = ()=>{
    if(count.value === 0){
        count.value = 0
    }else{
    count.value--
    }
}
    
</script>
<style lang="">
    
</style>