<template lang="">
    <div class="card">
        <img :src="`/images/${experience.image}`" :alt="experience.name" />
        <span class="card__text">{{experience.name}}</span>
    </div>
</template>
<script setup>
import {defineProps} from 'vue'

 defineProps({
    experience:{type:Object,required:true}
})
// export default {
    
// }
</script>
<style lang="">
    
</style>