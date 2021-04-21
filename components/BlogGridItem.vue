<template>
    <div class="blog">
        <div class="thumbnail">
            <n-link to="/blog-details" class="image">
                <img :src="blog.imgSrc" :alt="blog.title">
            </n-link>
        </div>
        <div class="info">
            <h3 class="title">
                <n-link to="/blog-details">{{ blog.title }}</n-link>
            </h3>
            <n-link to="/blog-details" class="link">
                <mark>Read More</mark>
            </n-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['blog']
    };
</script>