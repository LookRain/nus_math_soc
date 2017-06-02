<template>
  <div>

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="title">Events
              </h1>
              <h2 class="subtitle">Competitions, talks, workshops and more ...
              </h2>
            </div>

          </div>
          
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <event-slider :points="points"></event-slider>
        
      </div>
      
    </section>

    <section class="section">
      <div class="container">
       <event-timeline :points="points"></event-timeLine>
       </div>
     </section>
     <transition name="bounce">
     <button v-if="topButtonOn" class="button is-primary" id="floating" v-scroll-to="'#nav'"><i class="fa fa-arrow-up" aria-hidden="true"></i></button>
     </transition>

   </div>

 </template>

 <script>
  import EventTimeline from '@/components/EventTimeline'
  import EventSlider from '@/components/EventSlider'
  import EventsList from '@/components/events.js'

  export default {
    name: 'Events',
    components: { EventTimeline, EventSlider },
    data () {
      return {
        points: '',
        topButtonOn: false
      }
    },
    created () {
      this.points = EventsList
      document.addEventListener('scroll', () => {
        if (document.body.scrollTop > 1500) {
          this.topButtonOn = true
        } else {
          this.topButtonOn = false
        }
      })
    }
  }
</script>
<style lang="css" scoped>  
  #floating {
    position: fixed; 
    right: 10px; 
    bottom: 10px; 
    border-radius:50%;  
    width:50px;
    height:50px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); 
  }


.bounce-enter-active {
  animation: bounce-up 0.25s;
}
.bounce-leave-active {
  animation: bounce-up 0.25s reverse;
}
@keyframes bounce-up {
  0% {
    transform: translateY(5rem);
    /*transform: scale(0);*/
  }
  50% {
    transform: translateY(-1.5rem);
    /*transform: scale(1.3);*/
  }
  100% {
    transform: translateY(0rem);
    /*transform: scale(1);*/
  }
}
</style>
