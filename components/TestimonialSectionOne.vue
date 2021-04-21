<template>
    <div class="testimonial-section section-padding-t90 section-padding-bottom">
        <div class="container-fluid">
            <!-- Section Title Start -->
            <div class="section-title text-center" data-aos="fade-up">
                <h2 class="title fz-32">Here’s what our clients have to say about our services</h2>
            </div>
            <!-- Section Title End -->

            <!--Testimonial Slider Start -->
            <div class="testimonial-slider" data-aos="fade-up">
                <swiper :options="swiperOption">
                    <div class="swiper-slide" v-for="(testimonial, index) in testimonialData" :key="index">
                        <TestimonialItem :testimonial="testimonial" />
                    </div>
                </swiper>
                <div class="swiper-pagination text-center"></div>
            </div>
            <!--Testimonial Slider End -->
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            TestimonialItem: () => import('@/components/TestimonialItem'),
        },

        data() {
            return {
                swiperOption: {
                    slidesPerView : 3,
                    centeredSlides: true,
                    loop: true,
                    speed: 1000,
                    spaceBetween : 50,
                    autoHeight: true,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                    },
                    breakpoints: {
                        1499:{
                            slidesPerView : 3
                        },

                        768:{
                            slidesPerView : 2
                        },
                        320:{
                            slidesPerView : 1
                        }
                    }
                },

                testimonialData: [
                    {
                        id: 1,
                        text: "I’ve learned the importance of positive daily affirmations and that what we tell ourselves becomes a habit and the words we use manifest into actions. I now have a whole new perspective on wellness",
                        imgSrc: "/images/testimonial/author-1.png",
                        name: "Ashley Davis",
                        position: "Frontend Developer"
                    },
                    {
                        id: 2,
                        text: "I have learned a great deal about awareness and how that alone can help you improve results and increase your bottom line. Balance Period has showed the importance of maintaining a positive attitude and present perspective while trying to achieve your goals!",
                        imgSrc: "/images/testimonial/author-2.png",
                        name: "Josh Hunter",
                        position: "Marketing Manager"
                    },
                    {
                        id: 3,
                        text: "Using the B.A.L.A.N.C.E. Blueprint to slowly but surely become more aware of what I’m spending time on, and thus where my energy is going, made it very clear where the adjustments in my life needed to be made. By adding in consistent positive habits, and focusing on expanding my awareness, I was able to step away from a career that was not adding to my life and start something new. I’ve never been more excited to be alive, so thank you to Balance Period.",
                        imgSrc: "/images/testimonial/author-3.png",
                        name: "John Miles",
                        position: "Team Leader"
                    }
                ]
            }
        },
    };
</script>