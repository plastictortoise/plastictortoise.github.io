<script>
    export let title;
    export let image;
</script>

<div class="section">
    <img class="image" loading="lazy" src="{image}" alt="title">
    <div class="text">
        <h1>{title}<span>.</span></h1>    
    </div>
</div>

<style>
    .section {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100vh;
    }
    .text {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .image {
        object-fit: cover;
        object-position: center;
        overflow: hidden;
    }
    .image, .text {
        height: 50%;
        width: 100%;
    }
</style>