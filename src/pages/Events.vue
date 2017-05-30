<template>
<div>
	<section class="section">
		<div class="container">
		<h1 class="title">Events</h1>
			<event-timeLine :points="points"></event-timeLine>

		</div>
	</section>
	
</div>

</template>
<script>
import EventTimeline from '@/components/EventTimeline'
import EventsList from '@/components/events.js'

export default {
  name: 'Events',
  components: { 'event-timeLine': EventTimeline },
  data () {
    return {
    	points: [
      {
        pointColor: 'red', // important! the color of every time point and you can use red yellow or green
        img: 'sudoku',
        title: 'hello world',
        text: 'first post',
        linkUrl: 'https://www.google.com',
        linkText: 'Read detail',
        date: '2017-1-1',
        poster: 'cube2016'
      },
      {
        pointColor: 'green', // important! the color of every time point and you can use red yellow or green
        img: 'rubik',
        title: 'hello world',
        text: 'first post',
        linkUrl: 'https://www.google.com',
        linkText: 'Read detail',
        date: '2017-2-1'
      }
    ]
    }
  },
  mounted () {
    console.log(EventsList)
  }

}
</script>
<style lang="css" scoped>
</style>
