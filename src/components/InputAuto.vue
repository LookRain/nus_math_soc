<template>
	<div class="field has-addons">
		<p class="control is-expanded">
			<input class="input" type="text" placeholder="Text input" @focus="getFocus" v-model="searchInput" @blur="loseFocus" @click="getFocus" @keyup="getFocus" @keydown.enter="selectSendFromKey">
			<transition name="slide-fade">
				<ul class="drop-ul" v-show="shouldShow">
					<li v-for="(item, index) in searchResult" @mousedown="select(index)" class="drop-li" @mouseover="setHighlight(index)" :class="{ 'highlighted': highlightIndex===index }">{{ item }}</li>
				</ul>
			</transition>
		</p>
		<p class="control">
			<a class="button is-info" @click="sendSearch">
				Search
			</a>
		</p>
		
	</div>
</template>
<script>
	import Bus from '@/event-bus'

	export default {
	  name: 'InputAuto',
	  props: ['moduleArray'],
	  data () {
	    return {
	      highlightIndex: '',
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
	      Bus.fire('remove_error')
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
	    select (id) { // DOES NOT SEND SEARCH EVENT
	    	this.selectedMod = this.searchResult[id]
	    	this.searchInput = this.selectedMod
	    	Bus.fire('select_mod', this.selectedMod)
	    },
	    cleanseInput (str) {
	    	let result = ''
	    	if (str) {
	    		result = str.toUpperCase().replace(/[^0-9a-z]/gi, '')
	    	}
	    	return result
	    },
	    selectSendFromKey () {
	    	if (this.searchResult.length > 0) {
	    		this.selectedMod = this.searchResult[0]
	    		// console.log(this.selectedMod)
	    		this.searchInput = this.selectedMod
	    		Bus.fire('select_mod', this.selectedMod)
	    		this.sendSearch()
	    	} else {
	    		this.sendSearch()
	    	}
	    	this.isOpen = false
	    },
	    sendSearch () {
	    	this.selectedMod = this.searchInput
	    	Bus.fire('select_mod', this.selectedMod)
	    	Bus.fire('search')
	    }
	  },

	  created () {
	
	  },
	  watch: {
	  	searchInput (val) {
	  		val = this.cleanseInput(val)
	  		if (val) {
	  			this.searchInput = val.trim()
	  		}
	  		this.searchResult = this.search(val)
	  	},
	  	searchResult (val) {
	  		if (val.length > 0) {
	  			this.resultEmpty = false
	  		} else {
	  			this.resultEmpty = true
	  		}
	  		this.shouldShow = this.isOpen && !this.resultEmpty
	  	},
	  	isOpen (val) {
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
	.slide-fade-enter-active {
		transition: all .3s ease;
	}
	.slide-fade-leave-active {
		transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-to
	/* .slide-fade-leave-active for <2.1.8 */ {
		transform: translateY(30px);
		opacity: 0;
	}
</style>
