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
<style lang="css">
/*.container {
    border-style: solid; border-radius: 3%;  
    -webkit-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow:    1px 1px 1px 0px rgba(0, 0, 0, 0.5);
    box-shadow:         1px 1px 1px 0px rgba(0, 0, 0, 0.5);
  }*/
</style>
