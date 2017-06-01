
<template>
  <div class="card">

    <div class="card-content has-text-centered" id="carousel">


      <!-- swiper -->
      <swiper :options="swiperOption" id="slideContainer">
        <swiper-slide v-for="event in points" :key="event.id">
         <div class="card" :id="event.pointColor">
          <div class="column">
            <a href="#" v-scroll-to="'#' + event.id"><div class="card-content" id="slideCard">
              <div class="wrap">
                <img v-if="event.img" class="myicon" :src="getIconUrl(event.img)" height="80" width="80">
                <img v-else class="myicon" :src="getDefaultIconUrl()" height="80" width="80">
              </div>                         

              
              <p class="cardText" v-if="event.shortName">{{ event.shortName }}</p>
              <p class="cardText" v-else>{{ event.name }}</p>
              <small class="cardText" v-if="event.date">{{ event.date }}</small>
            </div>
          </a>
        </div>  
      </div>
    </swiper-slide>
    <div class="swiper-button-prev swiper-button-nusmath" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-nusmath" slot="button-next"></div>

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
          effect: 'coverflow',
          centeredSlides: true,
          slidesPerView: 3,
          paginationClickable: true,
          coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          }
  
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
  
.swiper-button-prev.swiper-button-nusmath,
.swiper-container-rtl .swiper-button-next.swiper-button-nusmath {
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjcgNDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI3IDQ0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6IzAwQTA4NTt9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMCwyMkwyMiwwbDIuMSwyLjFMNC4yLDIybDE5LjksMTkuOUwyMiw0NEwwLDIyTDAsMjJMMCwyMnoiLz48L3N2Zz4=");
}

.swiper-button-next.swiper-button-nusmath,
.swiper-container-rtl .swiper-button-prev.swiper-button-nusmath {
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjcgNDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI3IDQ0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6IzAwQTA4NTt9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjcsMjJMMjcsMjJMNSw0NGwtMi4xLTIuMUwyMi44LDIyTDIuOSwyLjFMNSwwTDI3LDIyTDI3LDIyeiIvPjwvc3ZnPg==");
}
 #green {
    background: hsl(171, 100%, 41%);
  }
  #red {
    background: #ffb3b3;
  }
  #yellow {
    background: hsl(48, 100%, 67%);
  }

  .cardText {
    color: black;
  }

</style>
