<template lang="">
    <div>
        <button @click="onClick">Counter {{inc}}</button>
        <!-- <span v-html="templateSyntax"></span> -->
        <a @click.prevent="onClick" href="https://www.google.com" target="blank">Google</a>
    </div>
</template>
<script>
export default {
    name:"CounterComp",
    // props:["inc"],
    props:{inc:Number},
    data(){
        return{
         count:0,
        //  templateSyntax:"<mark>Hello vue js</mark>"
        }
    },
    methods: {
        onClick:function(){
        //    this.count++
        console.log("prop inc", this.inc)
        this.$emit("msgGotReset",this.count)
        }
    },
    // beforeCreate() {
    //     alert("before create")
    // },
    // created() {
    //     this.timeOutId = setTimeout(() => {
    //      alert("created called")
    //    }, 1000);
    // },
    // beforeMount() {
    //     alert("before mount called")
    // },
    // mounted() {
    //     alert("mounted called")
    // },
    // beforeUpdate() {
    //     alert("before update called")
    // },
    // updated() {
    //     alert("updated called")
    // },
    // beforeUnmount() {
    //     clearTimeout(this.timeOutId)
    //     alert("before destroy called")
    // },
    // unmounted() {
    //     alert("after destroyed called")
    // },
}
</script>
<style lang="">
    
</style>