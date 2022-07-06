<template>
  <teleport to="#header">
    <Header />
  </teleport>
  <main class="my-6">
    <Main />
    <Testimonial />
  </main>
  <teleport to="#footer">
    <Footer />
  </teleport>
</template>

<script>
import Main from './components/Main.vue'
import Testimonial from './components/Testimonial.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  components: {
    Main,
    Testimonial,
    Footer,
    Header,
  },
}
</script>

