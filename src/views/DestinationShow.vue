<template lang="">
    <div>
        <!-- <h2>Hellow Destination {{$route.params.id}}</h2> -->
        <!-- <h2>Hellow Destination {{destinationId}}</h2>
        <h2>{{destination}}</h2> -->
        <section class="destination" v-if="destination">
            <h1>{{destination.name}}</h1>
            <GoBack />
          <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name" />
            <p>{{destination.description}}</p>
           </div>
        </section>
        <section class="experiences">
           <h2>Top Experiences in {{destination.name}}</h2>
           <div class="cards">
           <router-link v-for="experience in destination.experiences" 
                :key="experience.slug"
                 :to="{name:'experience.show',params:{experienceSlug:experience.slug}}">
                <ExperienceCard 
                :experience="experience" />
           </router-link>
           </div>
        <router-view></router-view>
        </section>
    </div>
</template>
<script setup>
import sourceData from "@/data.json"
import ExperienceCard from '@/components/ExperienceCard.vue'
import GoBack from '@/components/GoBack.vue'
// import axios from 'axios'
import {computed,defineProps} from "vue"
// import { useRoute } from 'vue-router'

// const destination = ref(null)
const props = defineProps({
    id:{type:Number,required:true}
})
// const route = useRoute()
// const destinationId = computed(() => parseInt(route.params.id))
const destination = computed(()=>{
    return sourceData.destinations.find((destination)=>destination.id === props.id)
    // return sourceData.destinations.find((destination)=>destination.id === destinationId.value)
    // return initData()
})
// const initData = ()=>{
//     axios.get(`https://travel-dummy-api.netlify.app/${route.params.slug}`)
//     .then((res)=>{
//         console.log('res',res.data)
//         destination.value = res.data
//         })
//     .catch((err)=>console.log("err",err))
// }
// onMounted(() => {
//     initData()
//     watch(()=>route.params,()=>initData())

// })
// export default {
    
// }
</script>
<style>
</style>