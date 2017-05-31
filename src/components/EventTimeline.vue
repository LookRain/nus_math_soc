<template>
  <section class="timeline-container timeline">
    <div @click="changeCurrentTimePoint(point)" v-for="point in points" class="timeline-block">
      <div class="timeline-img" :class="['timeline-img',point.pointColor===undefined?'red':point.pointColor]">
        <img v-if="point.img" :src="getIconUrl(point.img)" alt="">
        <img v-if="!point.img" :src="getDefaultIconUrl()" alt="">
      </div>

      <div class="timeline-content">
     
        <h2 v-text="point.name"></h2>
        <p v-if="point.date"><b>Date: </b>{{ point.date }}</p>
        <p v-if="point.startTime"><b>Time: </b>{{ point.startTime }} ~ {{ point.endTime }}</p>
        <p v-if="point.venue"><b>Venue: </b>{{ point.venue }}</p>

        <p v-if="point.website">You may find more information on our <a :href="point.website">Official Website.</a></p>
        <p>
          <span v-if="point.registrationLink">Please <a :href="point.registrationLink"><b>register</b></a> using the link <a :href="point.registrationLink">here</a>.</span><br>
          <span v-if="point.registrationDetails">{{ point.registrationDetails }}</span>
        </p>

        <p v-if="point.description"><b>More Details: </b><pre>{{ point.description }}</pre></p>
        
        <img v-if="point.poster" :src="getPosterUrl(point.poster)" alt="">
        <div class="column">
          <a :href="point.linkUrl"
           class="button is-primary is-outlined"
           target="_blank"
           v-if="point.linkUrl"
           v-html="point.linkText!=undefined?point.linkText:'Read More'"
        ></a>
        </div>
        <div class="column">
       
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
      }
    }
  }
</script>
