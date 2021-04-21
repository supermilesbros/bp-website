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
                            <span class="sub-title">Your guide to actualize your potential</span>
                            <h3 class="title">Steps of the B.A.L.A.N.C.E. Blueprint</h3>
                        </div>
                        <p>Step 1: Belief [Self-Efficacy]</p>
                        <p>Step 2: Awareness [Self-Acceptance]</p>
                        <p>Step 3: Love [Self-Compassion]</p>
                        <p>Step 4: Accountability [Self-Care]</p>
                        <p>Step 5: No. [Personal Boundaries]</p>
                        <p>Step 6: Consistency [Self-Discipline]</p>
                        <p>Step 7: Enjoy [Gratitude]</p>
                        
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