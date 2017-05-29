<template>
<swiper :options="swiperOption">
                  <swiper-slide><b>test</b>Slide 1</swiper-slide>
                  <swiper-slide v-for="imgs in carouselImages"><my-component></my-component></swiper-slide>
                  <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
</template>
<script>
export default {
  name: 'ImageCarousel',
  data () {
    return {
    }
  }
}
</script>
<style lang="css" scoped>
</style>