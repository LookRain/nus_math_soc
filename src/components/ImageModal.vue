<template>

<div v-if="modalOpen" class="modal is-active">
          <div class="overlay" @click="closeModal" @touchmove="prevent" @mousemove="prevent" @drag="prevent"></div>
          <div class="modal-content" @touchmove="prevent" @mousemove="prevent" @drag="prevent">
            
              <img class="popUpImg" :src="getPosterUrl(imageName)" @touchmove="prevent" @mousemove="prevent" @drag="prevent">
            
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
    },
    prevent (event) {
      event.preventDefault()
      event.stopPropagation()
    },
    preventScrolling () {
      if (this.locked) return
    // body 操作
      const body = document.getElementsByTagName('body')[0]
      const html = document.getElementsByTagName('html')[0]
      this.bodyOverflow = body.style.overflow
      this.htmlOverflow = html.style.overflow
      body.style.overflow = 'hidden'
      html.style.overflow = 'hidden'
      this.locked = true
    },
    allowScrolling () {
      const body = document.getElementsByTagName('body')[0]
      const html = document.getElementsByTagName('html')[0]
      body.style.overflow = this.bodyOverflow || ''
      html.style.overflow = this.htmlOverflow || ''
      this.bodyOverflow = null
      this.htmlOverflow = null
      this.locked = false
    }
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
        this.preventScrolling()
        // document.documentElement is the same as using document.querySelector('#root')
      } else {
        this.allowScrolling()
      }
    }
  }
}
</script>
<style lang="css" scoped>
.modal-background {
  position: fixed;
  background-color: rgba(10, 10, 10, 0.90);
  z-index: 1000;
}
.modal-content {
  z-index: 1500;
}
.modal-close {
  z-index: 3000;
}
.modal-content {
  overflow: hidden;
  margin: auto;
  max-height: calc(100vh - 100px);
  width: auto;
  height: auto;
  max-width: 100%;
}
.popUpImg {
    margin: auto;
    max-height: calc(100vh - 100px);
    height: auto;
    max-width: 100%;
    width: auto;
    left: 50%;
    z-index: 2000;
}
.overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
  opacity: .4;
  z-index: 1000;
}


</style>
