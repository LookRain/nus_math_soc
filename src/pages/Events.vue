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
     <button class="button is-primary" id="floating"><i class="fa fa-arrow-up" aria-hidden="true" v-scroll-to="'#nav'"></i></button>

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
        points: ''
      }
    },
    mounted () {
      console.log(EventsList)
      this.points = EventsList
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
</style>
