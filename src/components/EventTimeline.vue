<template>
  <section class="timeline-container timeline">
    <div class="column">
      <transition name="fade">

        <image-modal :imageName="activeImage"></image-modal>

      </transition>
    </div>
    <div v-for="point in points" class="timeline-block">
      <div class="timeline-img" :class="['timeline-img',point.pointColor===undefined?'red':point.pointColor]">
        <img :src="getIconUrl(point.img)" alt="">
        
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
          <img v-if="point.poster" :src="getPosterUrl(point.poster)" @click="setActiveImage(point.poster)">
          
        </div>
        

        <div class="column">
          <a :href="point.website"
          class="button is-primary is-outlined"
          target="_blank"
          v-if="point.website"
          v-html="point.linkText!=undefined?point.linkText:'Read More'"
          ></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="./styles/eventTimeline.css" scoped>
</style>

<script>
  import ImageModal from './ImageModal'
  import Bus from '../event-bus'

  export default{
    props: {
      points: {
        required: true
      }
    },
    data () {
      return {
        activeImage: ''
      }
    },
    components: { ImageModal },
    methods: {
      getIconUrl (imgName) {
        var defaultImage = require.context('../assets/eventIcons/', false, /\.png$/)
        if (imgName) {
          var images = require.context('../assets/eventIcons/', false, /\.png$/)
          return images('./' + imgName + '.png')
        }
        return defaultImage('./' + 'math' + '.png')
      },

    // The image needs to be in .jpg format!!!
    // If it is not, convert to jpg.
      getPosterUrl (imgName) {
        var images = require.context('../assets/images/posters/', false, /\.jpg$/)
        return images('./' + imgName + '.jpg')
      },
      setActiveImage (imgName) {
        this.activeImage = imgName
        Bus.fire('invoke')
      }
    }
}
</script>
