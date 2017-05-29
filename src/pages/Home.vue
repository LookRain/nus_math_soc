<template>
  <div>
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="title">NUS Mathematics Society
              </h1>
              <h2 class="subtitle">Welcome to our website
              </h2>
            </div>

          </div>
          
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">

        <div class="columns">
          <div class="column is-8">
            <div class="card">
             
              <div class="card-content" id="carousel">
                <!-- swiper -->
                <swiper :options="swiperOption">
                  <!-- <swiper-slide><b>test</b>Slide 1</swiper-slide>
                  <swiper-slide>{{ carouselImages[1] }}</swiper-slide> -->
                  <!-- <swiper-slide v-for="img in carouselImages"><img :src="getUrl(1)" :alt="img.link" :key="img.link"></swiper-slide> -->
                  <swiper-slide v-for="img in carouselImages2"><img :src="getUrl(img)"></swiper-slide>
                  <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
              </div>

            </div>
          </div>

          <div class="column is-4">
            <div class="card">

              <div class="card-content">
                <p class="title">Who are we?</p>
                <p class="subtitle" v-for="paragraph in description">{{ paragraph }}</p>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <span>
                    View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
                  </span>
                </p>
                <p class="card-footer-item">
                  <span>
                    Share on <a href="#">Facebook</a>
                  </span>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  </div>

</template>

<script>

export default {
  name: 'Home',

  data () {
    return {
      title: '',
      description: ['NUS Mathematics Society is a group of energetic and fun-loving people who organize exciting events for all those who have an interest in Mathematics.',
        ' NUS Mathematics Society has organized various events ranging from intra-faculty level to international level. Some of the major events include the Singapore Rubik’s Cube Competition, NUS Sudoku Competition, Enrichment Talks and Student Staff Games.'],
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true
      },
      link: 'AGM_2016.jpg',
      carouselImages: [
        {link: 'static/images/photos/AGM_2016.jpg', des: 'img1'},
        {link: 'static/images/photos/cubeSchool.jpg', des: 'img1'},
        {link: 'static/images/photos/latex.jpg', des: 'img1'},
        {link: 'static/images/photos/outing.jpg', des: 'img1'},
        {link: 'static/images/photos/sudoku.jpg', des: 'img1'}
      ],
      carouselImages2: [
        'AGM_2016',
        'cubeSchool',
        'latex',
        'outing',
        'sudoku'
      ]
    }
  },
  methods: {
    getUrl (imgName) {
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
</style>
