<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <BreadcrumbOne :items="items" title="We are an agency located in Indianapolis" backgroundUrl= "/images/BP/bp10.jpg" />

        <CallToActionOne />

        <!--Google Map Area Start-->
        <!-- <div class="google-map-area section-padding-bottom">
            <div class="container">
                <div class="contact-map-area">
                    <iframe class="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196237.09278277867!2d-86.27283313943275!3d39.779964154937446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50ffa7796a03%3A0xd68e9df640b9ea7c!2sIndianapolis%2C%20IN!5e0!3m2!1sen!2sus!4v1616423546695!5m2!1sen!2sus" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div> -->
        <!--Google Map Area Start-->

        <ContactForm />

        <TheFooter />

    </div>
</template>

<script>
    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            BreadcrumbOne: () => import('@/components/BreadcrumbOne'),
            CallToActionOne: () => import('@/components/CallToActionOne'),
            ContactForm: () => import('@/components/ContactForm'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        data() {
            return {
                
            }
        },

        head() {
            return {
                title: 'Contact Us'
            }
        },
    };
</script>


