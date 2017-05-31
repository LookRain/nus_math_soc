<template>
  <div>
  <my-nav></my-nav>
  <transition name="slide-fade">
    <router-view></router-view>
    </transition>
  </div>
  
</template>

<script>
import MyNav from '@/components/MyNav'

export default {
  name: 'app',
  components: { MyNav }
}
</script>

<style lang="css">
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(20px);
  opacity: 0;
}
</style>

