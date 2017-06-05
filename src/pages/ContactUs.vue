<template>
	<div>
		<section class="hero is-info">
			<div class="hero-body">
				<div class="container">
					<div class="columns">
						<div class="column">
							<h1 class="title">Contact Us
							</h1>
							<h2 class="subtitle">By email (or mail if you are more old-schooled)
							</h2>
						</div>
					</div>          
				</div>
			</div>
		</section>

		<section class="section">
			<div class="container">

				<div class="content">
					<h1 class="title">Email Addresses</h1>

					<article class="media">
						<figure class="media-left">
							<p class="image is-32x32">
								<img :src="inquiryIcon">
							</p>
						</figure>
						<div class="media-content">
							<p>For general enquries, please direct your emails to admin@nusmathsoc.org
							</p>
						</div>
					</article>

					<article class="media">
						<figure class="media-left">
							<p class="image is-32x32">
								<img :src="schoolIcon">
							</p>
						</figure>
						<div class="media-content">
							<p>For enquries related to Rubik's Cube competition School Category, please direct your emails to cube.school@nusmathsoc.org
							</p>
						</div>
					</article>

					<article class="media">
						<figure class="media-left">
							<p class="image is-32x32">
								<img :src="openIcon">
							</p>
						</figure>
						<div class="media-content">
							<p>For enquries related to Rubik's Cube competition Open Category, please direct your emails to cube.open@nusmathsoc.org
							</p>
						</div>
					</article>
				</div>

				<hr>
				
				<div class="content">
					<h1 class="title">Mailing address: </h1>
					<article class="media">
						<figure class="media-left">
							<p class="image is-32x32">
								<img :src="mailIcon">
							</p>
						</figure>
						<div class="media-content">
							<p>NUS Mathematics Society</p>
							<p>National University of Singapore</p>
							<p>10, Lower Kent Ridge Road</p>
							<p>Singapore 119076</p>
						</div>
					</article>
				</div>

			</div>
		</section>

	</div>
</template>
<script>
	export default {
	  name: 'ContactUs',
	  data () {
	    return {
	      icons: {
	        school: 'rubik2', open: 'rubik3', inquiry: 'info', mail: 'letter'
	      }
	    }
	  },
	  computed: {
	    schoolIcon () { return this.getIconUrl(this.icons.school) },
	    openIcon () { return this.getIconUrl(this.icons.open) },
	    inquiryIcon () { return this.getIconUrl(this.icons.inquiry) },
	    mailIcon () { return this.getIconUrl(this.icons.mail) }
	  },
	  methods: {
	    getIconUrl (imgName) {
	      var defaultImage = require.context('../assets/eventIcons/', false, /\.png$/)
	      if (imgName) {
	        var images = require.context('../assets/eventIcons/', false, /\.png$/)
	        return images('./' + imgName + '.png')
	      }
	      return defaultImage('./' + 'math' + '.png')
	    }
	  }
	}
</script>
<style lang="css" scoped>
</style>
