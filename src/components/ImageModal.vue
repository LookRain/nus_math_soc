<template>

<div v-if="modalOpen" class="modal is-active">
          <div class="modal-background" @click="closeModal"></div>
          <div class="modal-content">
            
              <img class="popUpImg" :src="getPosterUrl(imageName)">
            
          </div>
          <button class="modal-close" @click="closeModal"></button>
        </div>
</template>
<script>
import Bus from '../event-bus'

export default {
  props: {
    imageName: {
      required: true
    }
  },
  name: 'ImageModal',
  data () {
    return {
    	modalOpen: false
    }
  },
  methods: {
    getPosterUrl (imgName) {
    	// if (!imgName) {
    	// 	return ''
    	// }
      var images = require.context('../assets/images/posters/', false, /\.jpg$/)
      return images('./' + imgName + '.jpg')
    },
    test () {
    	console.log('from test method')
    },
    wakeModal () {
      this.modalOpen = true
    },
    closeModal () {
      this.modalOpen = false
    },
    closeModalWithEsc (e) {
      if (e.keyCode === 27) {
        this.closeModal()
      }
    }
  },
  mounted () {
  	console.log('hey')
  },
  created () {
    document.addEventListener('keydown', this.closeModalWithEsc)
    Bus.listen('invoke', () => { this.wakeModal() })
  },
  destroyed () {
    document.removeEventListener('keydown', this.closeModalWithEsc)
  },
  watch: {
    modalOpen: function (isOpen) {
      if (isOpen) {
        document.documentElement.style.overflow = 'hidden'
          // document.documentElement is the same as using document.querySelector('#root')
      } else {
        document.documentElement.style.overflow = 'auto'
      }
    }
  }
}
</script>
<style lang="css" scoped>

.popUpImg {
    max-height: calc(100vh - 100px);
    height: auto;
    max-width: 100%;
    width: auto;
    left: 50%;
}

.modal-background {
  position: fixed;
  background-color: rgba(10, 10, 10, 0.90);
}

</style>
