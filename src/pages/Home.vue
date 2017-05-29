<template>
  <div>
    <section class="hero is-info is-bold">
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
            <image-carousel></image-carousel>
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
import ImageCarousel from '@/components/ImageCarousel'

export default {
  name: 'Home',
  components: { 'image-carousel': ImageCarousel },
  data () {
    return {
      title: '',
      description: ['NUS Mathematics Society is a group of energetic and fun-loving people who organize exciting events for all those who have an interest in Mathematics.',
        ' NUS Mathematics Society has organized various events ranging from intra-faculty level to international level. Some of the major events include the Singapore Rubik’s Cube Competition, NUS Sudoku Competition, Enrichment Talks and Student Staff Games.']
    }
  },
  methods: {

  }

}
</script>

<style lang="css" scoped>

</style>
