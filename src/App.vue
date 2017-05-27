<template>
  <div>
  <my-nav></my-nav>
    <router-view></router-view>
  </div>
  
</template>

<script>
import MyNav from '@/components/MyNav'

export default {
  name: 'app',
  components: { MyNav }
}
</script>

<style>

</style>

