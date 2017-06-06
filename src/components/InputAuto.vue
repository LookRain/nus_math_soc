<template>
	<div class="field">
		<label class="label">Module Code</label>
		<p class="control">
			<input class="input" type="text" placeholder="Text input" @focus="getFocus" v-model="searchInput" @blur="loseFocus">
			<ul class="drop-ul" v-show="shouldShow">
				<li v-for="(item, index) in searchResult" @mousedown="select(index)" class="drop-li" @mouseover="setHighlight(index)" :class="{ 'highlighted': highlightIndex===index }">{{ item }}</li>
				
			</ul>
		</p>
		
	</div>
</template>
<script>
	// import Bus from '@/event-bus'

	export default {
	  name: 'InputAuto',
	  data () {
	    return {
	      moduleArray: [],
	      highlightIndex: -1,
	      searchInput: '',
	      searchResult: [],
	      isOpen: false,
	      selectedMod: '',
	      resultEmpty: true,
	      shouldShow: false
	    }
	  },
	  computed: {
	  },
	  methods: {
	    setHighlight (id) {
	      this.highlightIndex = id
	    },

	    search (input) {
	      if (!input) {
	        return []
	      }
	      let result = []
	      result = this.moduleArray.filter(code => code.includes(input))
	      // console.log(result)
	      return result
	    },
	    getFocus () {
	      // console.log('focused')
	      if (this.searchResult.length === 1) {
	      	if (this.searchResult[0] === this.searchInput) {
	      		return
	      	}
	      }
	      this.isOpen = true
	    },
	    loseFocus () {
	      // console.log('lost')
	      this.isOpen = false
	    },
	    select (id) {
	    	this.selectedMod = this.searchResult[id]
	    	this.searchInput = this.selectedMod
	    	console.log(this.selectedMod)
	    }
	  },

	  created () {
	  	window.axios.get('http://nusmathsoc.org/php/pyp.php?cmd=moduleList').then((response) => {
	      // console.log(response)
	    this.moduleArray = response.data
	  })
	  },
	  watch: {
	  	searchInput (val) {
	  		this.searchResult = this.search(val)
	  	},
	  	searchResult (val) {
	  		if (val.length > 0) {
	  			this.resultEmpty = false
	  		} else {
	  			this.resultEmpty = true
	  		}
	  		this.shouldShow = this.isOpen && !this.resultEmpty
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
