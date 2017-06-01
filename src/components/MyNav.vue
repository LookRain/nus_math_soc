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
			<transition name="slide-fade">
			<div v-if="menuOn" class="nav-right nav-menu is-active is-hidden-desktop">
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
			</transition>

			<div class="nav-right nav-menu">
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
	      if (this.menuOn) {
	        this.menuOn = false
	        console.log('closed')
	      }
	    }
	  },
	  destroyed () {
	    for (let section of document.querySelectorAll('.section')) {
	      section.addEventListener('click', this.closeMenu)
	    }
	  },

	  watch: {
	  	// if click event happens outside the menu AND menu is currently open -> close the menu
	  	menuOn: function (newVal) {
	  		if (newVal) {
	  			console.log('from watcher: ' + newVal)
	  			for (let section of document.querySelectorAll('.section')) {
	  				section.addEventListener('click', this.closeMenu)
	  			}
	  		}
	  	}
	  }
	}
</script>

<style lang="css" scoped>
	.nav-item img {
		max-height: 2.55rem;
	}

.slide-fade-enter-active {
  transition: all .15s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  /*transform: translateX(-10px);*/
  transform-origin: top right;
  transform: scale(0.1,0.1);
  opacity: 0;
}
</style>
