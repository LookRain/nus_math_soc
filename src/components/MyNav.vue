<template>
<nav class="nav has-shadow">
<div class="container">

  <div class="nav-left">
  <!-- <div class="helper-left is-hidden-mobile"></div> -->
    <a class="nav-item">
      <img src="../assets/images/logo.jpg" alt="Bulma logo">
    </a>

    
  </div>

  <div class="nav-center">

    <a class="nav-item">
      <span class="icon">
        <i class="fa fa-facebook"></i>
      </span>
    </a>
  </div>

  <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
  <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
  <span class="nav-toggle" :class="{ 'is-active': toggleOn }" @click="toggle">
    <span></span>
    <span></span>
    <span></span>
  </span>

  <!-- This "nav-menu" is hidden on mobile -->
  <!-- Add the modifier "is-active" to display it on mobile -->

  

	<div class="nav-right nav-menu" :class="{ 'is-active': toggleOn }">
    <a class="nav-item is-tab">
      Home
    </a>
    <a class="nav-item">
      Events
    </a>

    <a class="nav-item">
      PYP
    </a>

    <a class="nav-item">
      Join us
    </a>

    <a class="nav-item">
      About us
    </a>

    <a class="nav-item">
      Contact us
    </a>

  </div>
  </div>
  <!-- <div class="helper-right is-hidden-mobile"></div> -->
</nav>
</template>

<script>
export default {

  name: 'MyNav',

  data () {
    return {
    	toggleOn: false
    }
  },

  methods: {
  	toggle () {
  		this.toggleOn = !this.toggleOn
  		console.log(this.toggleOn)
  	}
  }
}
</script>

<style lang="css" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

.helper-left {
	padding-left: 200px;
}
.helper-right {
	padding-right: 200px;
}
</style>
