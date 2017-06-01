<template>
  <section class="timeline-container timeline">
    <div @click="changeCurrentTimePoint(point)" v-for="point in points" class="timeline-block">
      <div class="timeline-img" :class="['timeline-img',point.pointColor===undefined?'red':point.pointColor]">
        <img v-if="point.img" :src="getIconUrl(point.img)" alt="">
        <img v-if="!point.img" :src="getDefaultIconUrl()" alt="">
      </div>

      <div class="timeline-content" :id="point.id">

        <h2 v-text="point.name"></h2>
        <p v-if="point.date"><b>Date: </b>{{ point.date }}</p>
        <p v-if="point.startTime"><b>Time: </b>{{ point.startTime }} ~ {{ point.endTime }}</p>
        <p v-if="point.venue"><b>Venue: </b>{{ point.venue }}<span v-if="point.venueDetails">, {{ point.venueDetails }}</span></p>

        <p v-if="point.website">You may find more information on our <a :href="point.website" target="_blank">Official Website.</a></p>
        <p v-if="point.registrationLink || point.registrationDetails">
          <span v-if="point.registrationLink">Please <a :href="point.registrationLink"><b>register</b></a> using the link <a :href="point.registrationLink">here</a>.</span><br>
          <span v-if="point.registrationDetails">{{ point.registrationDetails }}</span>
        </p>

        <p v-if="point.description"><b>More Details: </b><span v-html="point.description"></span></p>
        <div class="poster">
          <img v-if="point.poster" :src="getPosterUrl(point.poster)" @click="openModal(point.poster)">
          
        </div>
        

        <div class="column">
          <a :href="point.website"
          class="button is-primary is-outlined"
          target="_blank"
          v-if="point.website"
          v-html="point.linkText!=undefined?point.linkText:'Read More'"
          ></a>
        </div>

        <div class="column">
        <transition name="fade">
         <div v-if="modalOpen" class="modal is-active">
          <div class="modal-background" id="popUpBack" @click="closeModal"></div>
          <div class="modal-content">
            <p class="image">
              <img class="popUpImg" v-if="activeImage" :src="getPosterUrl(activeImage)">
            </p>
          </div>
          <button class="modal-close" @click="closeModal"></button>
        </div>
        </transition>
      </div>



    </div>
  </div>
</section>
</template>

<style src="./styles/eventTimeline.css" scoped>
</style>

<script>
  export default{
    props: {
      points: {
        required: true
      }
    },
    data () {
      return {
        modalOpen: false,
        activeImage: ''
      }
    },
    components: {},
    methods: {

      changeCurrentTimePoint: function (point) {
        this.$on('currentPoint', point)
      },

      getIconUrl (imgName) {
        var defaultImage = require.context('../assets/eventIcons/', false, /\.png$/)
        if (imgName) {
          var images = require.context('../assets/eventIcons/', false, /\.png$/)
          return images('./' + imgName + '.png')
        } else {
          return defaultImage('./' + 'compass' + '.png')
        }
      },

      getDefaultIconUrl () {
        var defaultImage = require.context('../assets/eventIcons/', false, /\.png$/)
        return defaultImage('./' + 'compass' + '.png')
      },

      getPosterUrl (imgName) {
        var images = require.context('../assets/images/posters/', false, /\.jpg$/)
        return images('./' + imgName + '.jpg')
      },
      openModal (imgName) {
        this.activeImage = imgName
        this.modalOpen = true
      },
      closeModal (event) {
        this.activeImage = ''
        this.modalOpen = false
      },
      closeModalWithEsc (e) {
        if (e.keyCode === 27 && this.modalOpen) {
          this.modalOpen = false
        }
      },
      prevent (event) {
        console.log('something happened')
        event.preventDefault()
        event.stopPropagation()
      },
      tag (strings, ...values) {
        console.log(strings.raw[0])
      }
    },
    created () {
      document.addEventListener('keydown', this.closeModalWithEsc)
    },
    destroyed () {
      document.removeEventListener('keydown', this.closeModalWithEsc)
    },
    watch: {
      modalOpen: function (isOpen) {
        if (isOpen) {
          document.documentElement.style.overflow = 'hidden'
          // document.documentElement is the same as using document.querySelector('#root')
        } else {
          document.documentElement.style.overflow = 'auto'
        }
      }
    }
  }
</script>
