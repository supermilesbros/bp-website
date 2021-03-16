<template>
    <div class="intro-slider">
        <div class="intro-section overlay bg-cover" :style="{ backgroundImage: `url('/images/hero-image/hero-3.jpg')` }">
            <div class="container">
                <div class="row row-cols-lg-1 row-cols-1">
                    <div class="col align-self-center">
                        <div class="intro-content m-auto text-center">
                            <vue-typed-js class="justify-content-center"
                                :strings="['Positively', 'Intensively', 'Extensively']" 
                                :loop="true" 
                                :typeSpeed="150"
                                :backSpeed="80"
                                :showCursor="false">
                                <h2 class="title">Expand Your Business <span class="typing"></span></h2>
                            </vue-typed-js>
                            <div class="desc">
                                <p>We are an agency located in New York. We think strategy, craft design, develop digital and create motion. To forward your brand and business.</p>
                            </div>
                            <n-link to="/about" class="btn btn-primary btn-hover-secondary">Get Started</n-link>
                            <n-link to="/about" class="btn btn-outline-white btn-hover-primary">Learn More</n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>