<template>
    <div class="section-padding-top section-padding-bottom-180">
        <div class="container">
            <div class="row">
                <div class="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                    <div class="about-image-area">
                        <div class="about-image js-tilt">
                            <img src="/images/about/about-3.jpg" alt="image">
                        </div>
                        
                        
                        <!-- Animation Shape Start -->
                        <ShapeWithAnimation addClassName="shape-1" data-depth="1" imgSrc="/images/shape-animation/about-shape-1.png" />
                    </div>
                </div>
                <div class="col-xl-5 col-lg-6 col-12" data-aos="fade-up">
                    <div class="about-content-area about-four">
                        <div class="section-title-two">
                            <span class="sub-title">Meet Your Team Where They Are</span>
                            <h3 class="title">You Can Only Manage What You Measure.</h3>
                        </div>
                        <p>We are here to give you a better understanding of where your team is so you can more effectively meet their needs.</p>
                        <n-link to="/" class="btn btn-primary btn-hover-secondary mt-30">Get Started</n-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation')
        },
    };
</script>