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
				<div class="content">
					<h3 class="title">Past Year Paper Solutions</h3>
					<p>Should you find any mistakes or have any feedback about the solutions, please email us at: <a href="mailto:latexify@nusmathsoc.org">latexify@nusmathsoc.org</a></p>
					<br>
					<h4 class="title">Search Module Code: </h4>
					<input-auto :module-array="moduleArrayRaw"></input-auto>
					<p class="help is-danger" v-show="shouldShowWarning">No search result.</p>
					<br>
					<ul>
						<li v-for="item in pypList"><a :href="pypDir + item.split('_')[0]+ '/' + item" target="_blank">{{ item }}</a></li>
					</ul>
				</div>
			</div>
			
		</section>
	</div>
</template>
<script>
	import InputAuto from '@/components/InputAuto'
	import Bus from '@/event-bus'

	export default {
	  name: 'Pyp',
	  data () {
	    return {
	      searchActive: false,
	      moduleArrayRaw: [],
	      module: '',
	      pypListRaw: [],
	      shoudDisplay: false,
	      pypDir: 'http://nusmathsoc.org/PYP/'
	    }
	  },
	  components: { InputAuto },
	  methods: {
	    search () {
	      this.pypListRaw = []
	      // console.log(this.module)
	      this.searchActive = true
	      window.axios.get('http://nusmathsoc.org/php/getpyplist.php?module=' + this.module).then((response) => {
	        // console.log(response.data)
	        this.pypListRaw = response.data
	      })
	    },
	    clean (input) {
	      if (!input.match(/[0-9a-z]/i)) {
	        return ''
	      } else {
	        return input
	      }
	    }
	  },
	  watch: {
	    pypList (val) {
	      if (val) {
	        this.shoudDisplay = false
	      } else {
	        this.shoudDisplay = true
	      }
	    }
	  },
	  computed: {
	    shouldShowWarning () {
	      return this.shoudDisplay && (this.pypList === undefined)
	    },
	    pypList () {
	      if (this.pypListRaw) {
	        return this.pypListRaw.filter((a) => this.clean(a))
	      }
	    }
	  },
	  created () {
	    window.axios.get('http://nusmathsoc.org/php/pyp.php?cmd=moduleList').then((response) => {
	      // console.log(response)
	      this.moduleArrayRaw = response.data
	    })

	    Bus.listen('select_mod', (data) => {
	      this.module = data
	      // console.log('selected: ' + data)
	    })

	    Bus.listen('search', () => { this.search() })

	    Bus.listen('remove_error', () => { this.shoudDisplay = false })
	  }
	}
</script>
<style lang="css" scoped>

</style>
