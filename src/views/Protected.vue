<template lang="">
    <div class="protected">
        <h1>Hi Greetings, {{username}}</h1>
        <button @click="logout">Logout</button>
        <router-link :to="{name:'invoices'}">
            <button>Invoices</button>
        </router-link>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const username = ref('')
const router = useRouter()
username.value = window.user

const logout = ()=>{
    window.user = null
    router.push({name:'Home'})
}
</script>