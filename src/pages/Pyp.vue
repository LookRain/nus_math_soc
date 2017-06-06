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

				<div class="field">
					<label class="label">Name</label>
					<p class="control">
						<input class="input" type="text" placeholder="Text input" @keyup="search(searchInput)" v-model="searchInput">
						<ul class="drop-ul">
							<li v-for="(item, index) in searchResult" class="drop-li" @mouseover="setHighlight(index)" :class="{ 'highlighted': highlightIndex===index }">{{ item }}</li>
							
						</ul>
					</p>
					
				</div>


				
			</div>
			
		</section>
	</div>
</template>
<script>
	export default {
	  name: 'Pyp',
	  data () {
	    return {
	      ary: ['abc', 'bbcx', 'c', 'de', 'eaxa'],
	      searchResult: [],
	      highlightIndex: -1,
	      b: true,
	      searchInput: ''

	    }
	  },
	  methods: {
	    setHighlight (id) {
	      // console.log(id)
	      this.highlightIndex = id
	    },
	    search (input) {
	    	if (!input) {
	    		console.log('empty')
	    		this.searchResult = []
	    		return
	    	}
	    	let result = []
	    	result = this.ary.filter(code => {
	    		return code.includes(input)
	    	})
	    	console.log(result)
	    	this.searchResult = result
	    }
	  },
	  created () {
	  	window.axios.get('http://nusmathsoc.org/php/pyp.php?cmd=moduleList').then((response) => {
	  		console.log(response)
	  		this.msg = response.data
	  	})
	  },
	  watch: {
	  	highlightIndex (val) {
	  		if (val === -1) {

	  		} else {
	        // console.log(val)
	  }
	  }
	  }
	}
</script>
<style lang="css" scoped>
	.drop-ul {
		display: flex;
		flex-direction: column;
		margin-top: 0px;
		border: 1px solid #dbdbdb;
		border-radius: 0 0 5px 5px;
		
		width: 100%;
		overflow: hidden;
		-webkit-box-shadow: 3px 3px 17px -5px rgba(0,0,0,0.75);
		-moz-box-shadow: 3px 3px 17px -5px rgba(0,0,0,0.75);
		box-shadow: 3px 3px 17px -5px rgba(0,0,0,0.75);
	}

	.drop-li {
		width: 100%;
		flex-wrap: wrap;
		background: white;
		margin: 0;
		border-bottom: 1px solid #eee;
		border-radius: 0 0 5px 5px;
		color: #363636;
		padding: 7px;
		cursor: pointer;
		
	}

	.highlighted {
		background: hsl(171, 100%, 37%);
	}
</style>
