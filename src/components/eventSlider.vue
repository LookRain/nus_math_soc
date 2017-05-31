
<template>
  <div class="card">

    <div class="card-content has-text-centered" id="carousel">


      <!-- swiper -->
      <swiper :options="swiperOption" id="slideContainer">

        <swiper-slide v-for="event in points">
           <div class="card" >
          <div class="column">
            <a href="#"><div class="card-content" id="slideCard">
              <div class="wrap">
                <img v-if="event.img" class="myicon" :src="getIconUrl(event.img)" height="80" width="80">
                <img v-else class="myicon" :src="getDefaultIconUrl()" height="80" width="80">
              </div>                         
             
              
              <p v-if="event.shortName">{{ event.shortName }}</p>
              <p v-else>{{ event.name }}</p>
              <small v-if="event.date">{{ event.date }}</small>
            </div>
            </a>
          </div>  
          </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      points: {
        required: true
      }
    },
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          paginationClickable: true,
          slidesPerView: 5,
          spaceBetween: 50
  
        }
      }
    },
    methods: {
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
        return defaultImage('./' + 'math' + '.png')
      }
    }
  }
</script>

<style>

.myicon {
  padding: 0.3rem;
  border:solid; 
  border-radius:50%;
}
#slideCard {
  padding: 0.5rem;
  min-height: 150px;
}
#slideContainer {
  height: 200px;
}

</style>
