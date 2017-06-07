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
				</div>

				<input-auto :module-array="moduleArrayRaw"></input-auto>
				<br><br><br><br>
				test


				
			</div>
			
		</section>
	</div>
</template>
<script>
	import InputAuto from '@/components/InputAuto'

	export default {
	  name: 'Pyp',
	  data () {
	    return {
	      moduleArrayRaw: []
	    }
	  },
	  components: { InputAuto },
	  created () {
	    window.axios.get('http://nusmathsoc.org/php/pyp.php?cmd=moduleList').then((response) => {
	      // console.log(response)
	      this.moduleArrayRaw = response.data
	    })
	  }
	}
</script>
<style lang="css" scoped>

</style>
