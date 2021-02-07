<template>
  <span>
    {{ letters.join('') }}
    <span class="cursor">|</span>
  </span>
</template>

<script>
export default {
  props: {
    typeSpeed: {
      type: Number,
      default: 200,
    },
    deleteSpeed: {
      type: Number,
      default: 100,
    },
    word: {
      type: String,
      default: 'Hello World!',
    },
  },
  data() {
    return {
      letters: [],
      str: '',
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
        this.str = this.word.split('')
        this.animate = setTimeout(this.type, this.typeSpeed)
    },
    type() {
      if (this.str.length > 0) {
        this.letters.push(this.str.shift())
        setTimeout(this.type, this.typeSpeed)
      } 
    },
  },
}
</script>

<style >
@keyframes cursorPulse {
  to {
    visibility: hidden;
  }
}
.cursor {
  display: inline-block;
  transform: translateY(-3px);
  animation: cursorPulse 1s steps(2, start) infinite;
}
</style>