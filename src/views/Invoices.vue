<template>
    <div class="invoices">
        <h1>Invoices</h1>
    </div>
</template>
<script setup>
import {onBeforeRouteLeave} from 'vue-router'
onBeforeRouteLeave(()=>{
    // console.log('to',to)
    // console.log('from',from)
    const answer = window.confirm('Are you sure you  want to leave? Invoices are super awesome!')
    if(!answer) return false
})
</script>