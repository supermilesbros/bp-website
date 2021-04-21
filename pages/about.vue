<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <BreadcrumbOne :items="items" title="We Empower Emotionally Intelligent Examples" backgroundUrl= "/images/BP/bp5.jpg" />

        <AboutTwo class="section-padding-top about-section-padding-bottom-200" />

        <CallToActionVideo />

        <AboutFour />

        <TestimonialSectionOne :style="{backgroundColor: '#f8faff'}" />


        <TheFooter />

    </div>
</template>

<script>
    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            BreadcrumbOne: () => import('@/components/BreadcrumbOne'),
            AboutTwo: () => import('@/components/AboutTwo'),
            CallToActionVideo: () => import('@/components/CallToActionVideo'),
            AboutFour: () => import('@/components/AboutFour'),
            TestimonialSectionOne: () => import('@/components/TestimonialSectionOne'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        data() {
            return {
               
            }
        },

        head() {
            return {
                title: 'About us'
            }
        },
    };
</script>


