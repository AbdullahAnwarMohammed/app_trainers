<template>
  <div>
    <HeroSection />
    <Features />
    <About />
    <Topics />
    <Pricing />
    <Categories />
    <Testimonials />
    <Partners />


  </div>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue'
import Features from '@/components/Features.vue'
import About from '@/components/About.vue'
import Topics from '@/components/Topics.vue'
import Pricing from '@/components/Pricing.vue'
import Categories from '@/components/Categories.vue'
import Testimonials from '@/components/Testimonials.vue'
import Partners from '@/components/Partners.vue'

export default {
  components: {
    HeroSection,
    Features,
    About,
    Topics,
    Pricing,
    Categories,
    Testimonials,
    Partners,
  }
}



</script>