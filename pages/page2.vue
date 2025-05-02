<template>
    <div>
        <Banner />
        <Projects />
        <Videoo />
        <div class="container">
            <Pricing />
            <Categories />
        </div>
    </div>
</template>

<script>
import Banner from '~/components/page2/Banner.vue'
import Projects from '~/components/page2/Projects.vue'
import Videoo from '~/components/page2/Video.vue'
import Pricing from '@/components/Pricing.vue'
import Categories from '@/components/Categories.vue'

export default {
    components: {
        Banner,
        Projects,
        Videoo,
        Pricing,
        Categories,

    }
}



</script>