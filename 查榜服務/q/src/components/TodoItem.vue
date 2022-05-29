<template>
    router切換圖片
    <img :src="imgRouter.img" alt="">
</template>

<script>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import img01 from '@/assets/logo.png'
import img02 from '@/assets/布列手做坊.jpg'
export default {
    setup(){
        // const 
        const route = useRoute()
        const imgRouter = computed(() => {
            const routerName = ref(route.name);
            const isRouter = routerName.value.includes('bb');
            // console.log('isRouter', isRouter);
            
            return {
                img: isRouter ? img01 : img02,
            }
        })
        return{
            imgRouter
        }
    }
}
</script>

<style>

</style>