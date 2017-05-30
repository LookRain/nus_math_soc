<template>
	<div class="card">

		<div class="card-content has-text-centered" id="carousel">
			<!-- swiper -->
			<swiper :options="swiperOption">
				<swiper-slide v-for="img in carouselImages"><img :src="getImageUrl(img.link)" style="width:100%;">
					<p><b>{{ img.des }}</b></p></swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>

			</div>

		</div>
	</template>
	<script>
		export default {
		  name: 'ImageCarousel',
		  data () {
		    return {
		      swiperOption: {
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        autoplay: 3000,
		        autoplayDisableOnInteraction: false,
		        autoHeight: true
		      },
		      carouselImages: [
					{link: 'AGM_2016', des: 'Maths Society Annual General Meeting 2016'},
					{link: 'cubeSchool', des: 'Singapore Rubik’s Cube Competitions 2015 School Category'},
					{link: 'latex', des: 'LaTeX Workshop 2015'},
					{link: 'sudoku', des: 'NUS Sudoku Competition 2014'}
		      ]
		    }
		  },
		  methods: {
		    getImageUrl (imgName) {
		      var images = require.context('../assets/images/photos/', false, /\.jpg$/)
      		// var imgArray = this.carouselImages2
      		return images('./' + imgName + '.jpg')
    }
  }
}
</script>
<style lang="css" scoped>
	#carousel {
		padding: 0rem;
	}
	.swiper-pagination {
		padding-bottom: 50px;
	}
</style>
