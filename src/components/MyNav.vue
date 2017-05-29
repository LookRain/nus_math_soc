<template>
	<nav class="nav has-shadow">
		<div class="container">

			<div class="nav-left">
				<!-- <div class="helper-left is-hidden-mobile"></div> -->
				<a class="nav-item">
					<img src="../assets/images/logo.jpg" alt="Math Soc logo">
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
				<router-link  to="/" exact class="nav-item">
					Home
				</router-link>
				<router-link  to="/admin" exact class="nav-item">
					Events
				</router-link>

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

</style>
