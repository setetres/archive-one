<template>
  <main class="min-w-0 max-w-7xl mx-auto flex-auto max-h-full overflow-visible">
    <Nuxt />
  </main>
</template>
<script>
export default {
  beforeRouteLeave(to, from, next) {
    this.$nextTick(() => {
      next()
    })
  },

  head() {
    return {
      title: 'Sete Três — Archive',
    }
  },

  mounted() {
    this.$nextTick(() => {
      ;(function () {
        const quotes = [
          {
            text: 'Abstraction is a type of decadence.',
          },
          {
            text: 'Believing in rebirth is the same as admitting defeat.',
          },
          {
            text: 'A lot of professionals are crackpots.',
          },
          {
            text: 'All things are delicately interconnected.',
          },
          {
            text: 'Boredom makes you do crazy things.',
          },
          {
            text: 'Repetition is the best way to learn.',
          },
          {
            text: 'Symbols are more meaninful than things themselves.',
          },
          {
            text: 'Technology will make or break us.',
          },
          {
            text: 'You are the past, present and future.',
          },
          {
            text: 'Expressing anger is necessary.',
          },
        ]

        const quote = quotes[Math.floor(Math.random() * quotes.length)]

        document.getElementById('quote').innerHTML = quote.text
      })()
    })
  },
}
</script>
