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
						<a href="https://www.facebook.com/nuscoolestsociety" target="_blank"><i class="fa fa-facebook"></i></a>
					</span>
				</a>
			</div>

			<!-- This "nav-toggle" hamburger menu is only visible on mobile -->
			<!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
			<span class="nav-toggle" :class="{ 'is-active': menuOn }" @click="toggle">
				<span></span>
				<span></span>
				<span></span>
			</span>

			<!-- This "nav-menu" is hidden on mobile -->
			<!-- Add the modifier "is-active" to display it on mobile -->

			

			<div class="nav-right nav-menu" :class="{ 'is-active': menuOn }">
				<router-link to="/" exact class="nav-item" @click.native="closeMenu">
					Home
				</router-link>

				<router-link to="/events" exact class="nav-item" @click.native="closeMenu">
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
	      menuOn: false
	    }
	  },

	  methods: {
	    toggle () {
	      this.menuOn = !this.menuOn
	      console.log(this.menuOn)
	    },
	    closeMenu () {
	      this.menuOn = false
	      console.log('closed')
	    }
	  },

	  watch: {
	  	// if click event happens outside the menu -> close the menu
	    menuOn: function (newVal) {
	      console.log('from watcher: ' + newVal)
	      for (var section of document.querySelectorAll('.section')) {
	        section.addEventListener('click', this.closeMenu)
	      }
	    }
	  }
	}
</script>

<style lang="css" scoped>
	.nav-item img {
		max-height: 2.55rem;
	}
</style>
