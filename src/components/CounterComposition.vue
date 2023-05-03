<template lang="">
    <div>
        <button @click="increment">Counter {{count}}</button>
        <p>{{obj.name}}</p>
        <p>{{obj.empId}}</p>
    </div>
    <div>
        <form @submit.prevent="submit">
            <input type="text" v-model="obj.name" ><br/>
            <input type="text" v-model="obj.empId" /><br/>
            <input type="submit" value="submit" />
        </form>
    </div>
    <div>Define Props: {{title}}</div>
</template>
<script setup>
import{ ref, onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted,reactive,defineProps,defineEmits } from 'vue'
const count = ref(1)
const props = defineProps({
    title:{type:String,required:true}
})
const emit = defineEmits(['enlarge-text']);
const obj = reactive({
    name:"mahesh",
    empId:339
})
const increment = ()=>{
    count.value++
    obj.name = "Mahesh Marupaka"
    emit('enlarge-text',"emitted event")
}
const submit = ()=>{
    console.log({name:obj.name,empId:obj.empId})
}
onBeforeMount(() => {
    // alert("before mount called")
    console.log(props.title)
})
onMounted(() => {
    // alert("mounted called")
    // console.log(`the initial count is ${count.value}`)
})
onBeforeUpdate(() => {
    // alert("before update called")
})
onUpdated(() => {
    // alert("updated called")
})
onBeforeUnmount(() => {
    // alert("before unmounted")
})
onUnmounted(() => {
    // alert("unmounted called")
})
</script>

<style lang="">
    
</style>