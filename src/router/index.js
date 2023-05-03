import { createRouter,createWebHistory } from 'vue-router'
// import About from "@/views/About.vue"
// import Brazil from "@/views/Brazil.vue"
// import Hawaii from "@/views/Hawaii.vue"
// import Jamaica from "@/views/Jamaica.vue"
// import Panama from "@/views/Panama.vue"
import Home from "@/views/Home.vue"
import sourceData from '@/data.json';

const routes = [
    // {path:"/about",name:"About",component:About}, // {path:"/about",name:"About",component:()=>import("../views/About.vue")},
    // {path:"/brazil",name:"Brazil",component:()=>import(/*webpackChunkName: "brazil" */"@/views/Brazil.vue")},
    // {path:"/hawaii",name:"Hawaii",component:()=>import(/*webpackChunkName: "hawaii" */"@/views/Hawaii.vue")},
    // {path:"/jamaica",name:"Jamaica",component:()=>import(/*webpackChunkName: "jamaica" */"@/views/Jamaica.vue")},
    // {path:"/panama",name:"Panama",component:()=>import(/*webpackChunkName: "panama" */"@/views/Panama.vue")},
    {path:"/",name:"Home",component:Home},
    {path:"/protected",
    name:"protected",
    component:()=>import("@/views/Protected.vue"),
    meta:{
        requiresAuth:true,
    }},
    {
        path:'/invoices',
        name:'invoices',
        component:()=>import('@/views/Invoices.vue'),
        meta:{
            requiresAuth:true
        }
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('@/views/Login.vue')
    },
    {path:"/destination/:id/:slug",
    name:"destination.show",
    component:()=>import(/*webpackChunkName: "destination" */"@/views/DestinationShow.vue"),
    // props:true
    props:route=>({...route.params,id:parseInt(route.params.id)}),
    beforeEnter: (to) => {
        // console.log('to-routes',to)
        // console.log('from-routes',from)
        // console.log('next-routes',next)
        const exists = sourceData.destinations.find(
            (destination)=>destination.id === parseInt(to.params.id)
        )
        if(!exists) return {
            name:"NotFound",
            params:{pathMatch:to.path.split('/').slice(1)},
            query:to.query,
            hash:to.hash
        }
    },
    children:[
        {
            path:":experienceSlug",
            name:'experience.show',
            component:()=>import('@/views/ExperienceShow.vue'),
            props:route=>({...route.params,id:parseInt(route.params.id)})
        }
    ]
},
{
    path:'/:pathMatch(.*)*',
    name:"NotFound",
    component:()=>import('@/views/NotFound.vue')
}

]
const router = createRouter({
    history:createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        // return savedPosition || {top:0,behavior:'smooth'}
        // return {top:null,left:null,behavior:null}
        return savedPosition || new Promise((resolve)=>{
            setTimeout(()=>resolve({top:0,behavior:'smooth'}),300)
        })

    }
    // linkActiveClass:"vue-spa-active-link"
})

router.beforeEach((to) => {
    // to and from are both route objects. must call `next`.
    if(to.meta.requiresAuth && !window.user){
        return {name:'login',query:{redirect:to.fullPath}}
        // return {name:'login'}
    }
})

export default router;