<template lang="">
    <div class="login">
        <form class="form" @submit.prevent="login">
            <h1>Login</h1>
            <label for="username">Username</label>
            <input type="text" class="input" name="username" v-model="username" />
            <label for="password">Password</label>
            <input type="text" class="input" name="password" v-model="password" />
            <button class="btn">Login</button>
        </form>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

const login = ()=>{
    window.user = username.value
    const redirectPath = router.query.redirect || '/protected'
    router.push({redirectPath})
    // router.push({name:'protected'})
}
// export default {
    
// }
</script>
<style lang="">
    
</style>