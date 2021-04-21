<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <BreadcrumbOne :items="items" title="We Make Self-Care Simple" backgroundUrl= "/images/BP/bp3.jpg" />

        <ServiceWrapper />

        <AboutFive />

        <TheFooter />

    </div>
</template>

<script>
    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            BreadcrumbOne: () => import('@/components/BreadcrumbOne'),
            ServiceWrapper: () => import('@/components/ServiceWrapper'),
            SuccessStory: () => import('@/components/SuccessStory'),
            AboutFive: () => import('@/components/AboutFive'),
            FunfactWithTitle: () => import('@/components/FunfactWithTitle'),
            ContactSectionTwo: () => import('@/components/ContactSectionTwo'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        data() {
            return {
                
            }
        },

        head() {
            return {
                title: 'Service'
            }
        },
    };
</script>


