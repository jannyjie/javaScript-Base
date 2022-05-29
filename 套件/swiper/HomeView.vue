<template>
  <experience :class-name="`workSwiper`" :itemList="itemList" :delay="5000" :item-list-open="true"  :prev="`prevA`" :next="`nextA`"> 
    <template v-slot:next>
        <p>next</p>
    </template>
    <template v-slot:prev>
        <p>prev</p>
    </template>
  </experience>
  <experience :class-name="`qq`" :itemList="itemList" :delay="3000" :item-list-open="true" :prev="`prevB`" :next="`nextB`"> 
    <template v-slot:next>
        <p>next</p>
    </template>
    <template v-slot:prev>
        <p>prev</p>
    </template>
  </experience>

</template>

<script>
// @ is an alias to /src
import experience from '@/components/ExperienceSwiper.vue';
import {ref} from 'vue';
export default {
 components: {
    experience
  },
  setup(){
    const itemList = ref(
      [
        {
          id: '1',
          name: 'janny'
        },
        {
          id: '2',
          name: 'Jack'
        },
        {
          id: '1',
          name: 'janny'
        },
        {
          id: '2',
          name: 'Jack'
        },
        {
          id: '1',
          name: 'janny'
        },
        {
          id: '2',
          name: 'Jack'
        }
      ]
    )
    return {
      itemList
    }
  }
}
</script>

<style>

</style>