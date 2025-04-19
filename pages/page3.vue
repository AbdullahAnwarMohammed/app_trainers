<template>
    <div>
        <div class="container">
            <Banner />
        </div>
        <Projects />
        <Testimonials3 />
        <Partners />
        <Counts />

    </div>
</template>

<script>
import Banner from '~/components/page3/Banner.vue'
import Projects from '~/components/page3/Projects.vue'
import Testimonials3 from '~/components/page3/Testimonials.vue'
import Partners from '~/components/Partners.vue'
import Counts from '~/components/page3/Counts.vue'


export default {
    components: {
        Banner,
        Projects,
        Testimonials3,
        Partners,
        Counts
    }
}


</script>