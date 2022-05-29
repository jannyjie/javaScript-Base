<template>
   <div class="swiper__contentBox" >
        <button class="swiper-button-next"  :class="next">
            <slot name="next"></slot>
        </button>
        <button class="swiper-button-prev" :class="prev">
            <slot name="prev"></slot>
        </button>
        <Swiper 
            :class='`${className}`'
            :modules="modules"
            :spaceBetween="10"
            :loop="true"
            :centeredSlides="false"
            :autoplay="{delay: `${delay}`, pauseOnMouseEnter:true}"
            :pagination="{ clickable: true }"
            :waitForTransition="true"
            :navigation="{nextEl: `.swiper-button-next.${next}`, prevEl: `.swiper-button-prev.${prev}`}"
            :breakpoints="{
            '425': {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            '768': {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            '1024': {
                slidesPerView: 3,
                spaceBetween: 25,
            },
            }"
          @mouseleave="stopSwip($event)"
          @mouseenter="startSwip($event)"
        >
            <SwiperSlide v-for="(item, index) in itemList" :key="index">
                <template v-if="itemListOpen" >
                    {{item.id}}
                    <h3 class="e__card-firstTitle-work">123</h3>
                </template>
                <template  v-else>
                    {{item.name}}
                    <span class="e__card-text-work">行政工讀生</span>
                    <h4 class="e__card-subTitle-work">聯成電腦有限公司</h4>
                    <h3 class="e__card-firstTitle-work">時薪170~180</h3>
                </template>
            </SwiperSlide>
        </Swiper>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import {ref} from 'vue';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay} from "swiper";


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  
  props: {
    itemList: {
      type: Array,
      default: () => [],
    },
    itemListOpen: {
      type: Boolean,
      default: false,
    },
    className:{
      type: String,
      default: '',
    },
    delay:{
      type: String,
      default: '',
    },
    next:{
      type: String,
      default: '',
    },
    prev:{
      type: String,
      default: '',
    }
  },
  setup() {
    const stopSwip = (event) => {
      event.target.swiper.$el[0].swiper.autoplay.start()
    };
    const startSwip = (event) => {
      event.target.swiper.$el[0].swiper.autoplay.stop()
    }
    return {
      stopSwip,
      startSwip,
      modules: [Navigation, Pagination, Autoplay,],
    };
  },
};
</script>
