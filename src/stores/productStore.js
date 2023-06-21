import {defineStore} from 'pinia'
// import axios from 'axios'
// import sourceData from '@/data.json'

export const useProductStore = defineStore('productStore',{
    state:()=>({
        // destinations:sourceData.destinations
        destinations:'',
        count:0
    }),
    getters:{
        get_destinations:(state)=>{
            // console.log('getters state',state)
            return state.destinations
        }
    },
    actions:{
        // async mutate_destinations(){
        // // this.destinations = axios.get("../../public/data.json")
        //     this.destinations = (await import("@/data.json")).default
        // }
        mutate_destinations : async ()=>{
            this.destinations = (await import("@/data.json")).default
        }
    }
})