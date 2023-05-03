<template lang="">
    <section>
        <h1>{{experience.name}}</h1>
        <img :src="`/images/${experience.image}`" :alt="experience.name" />
        <p>{{experience.description}}</p>
    </section>
</template>
<script setup>
import {defineProps,computed} from 'vue'
import sourceData from '@/data.json'

const props = defineProps({
    id:{type:Number,required:true},
    experienceSlug:{type:String,required:true}
})

const destination = computed(()=>{
    return sourceData.destinations.find((destination)=>destination.id === props.id)
})

const experience = computed(()=>{
    return destination.value.experiences.find((experience)=>experience.slug === props.experienceSlug)
})
// export default {
    
// }
</script>
<style lang="">
    
</style>