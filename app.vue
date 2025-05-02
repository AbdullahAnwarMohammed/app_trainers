<template>
  <div id="app-appilcation">
    <Navbar />
    <NuxtPage />
    <Footer />

  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Footer from './components/Footer.vue';

onMounted(async () => {
  if (process.client) {

    const WOW = (await import('wowjs')).WOW;
    new WOW({
      live: false // ← مهم أحيانًا مع مكونات SSR زي Nuxt
    }).init();

    const sliders = document.querySelectorAll('.slider');

    sliders.forEach(slider => {
      let isDown = false;
      let startX;
      let scrollLeft;

      slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });

      slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
      });

      slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
      });

      slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.5;
        slider.scrollLeft = scrollLeft - walk;
      });
    });

    import('jquery').then((module) => {
      const $ = module.default;
      import('slick-carousel').then(() => {
        $('.partners-carousel').slick({
          rtl: true,
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 4 } },
            { breakpoint: 992, settings: { slidesToShow: 3 } },
            { breakpoint: 767, settings: { slidesToShow: 3, dots: true, arrows: false } }
          ]
        });

        $('.categories-slider').slick({
          rtl: true,
          dots: true,
          infinite: false,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 4 } },
            { breakpoint: 992, settings: { slidesToShow: 3 } },
            { breakpoint: 767, settings: { slidesToShow: 1, arrows: false } }
          ]
        });


        $('.testimonials-slider').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          dots: true,
          infinite: true,
          arrows: false, // ← هذا هو السطر الجديد
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });
      });
    });
  }


});
</script>
