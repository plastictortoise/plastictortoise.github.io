<script>
    export let style;
    export let theme;
    export let images;
    export let title;

    let span = "display";

    if (title == "") {
        span = "none";
    }
</script>

{#if style == "0"}
    <!-- 4 Images -->
    <div class="section">
        <img class="quarter" alt="" src={images[0]} />
        <img class="quarter" alt="" src={images[1]} />
        <img class="quarter" alt="" src={images[2]} />
        <img class="quarter" alt="" src={images[3]} />
    </div>
{:else if style == "1"}
	<!-- 1 Image -- Left Title -->
    <div class="section theme-{theme}">
        <div class="block half">
            <h1>{title}<span class="span-{span}">.</span></h1>   
        </div>
        <img class="half" alt="" src={images[0]} />
    </div>
{:else if style == "2"}
	<!-- 1 Image -- Right Title -->
    <div class="section theme-{theme}">
        <img class="half" alt="" src={images[0]} />
        <div class="block half">
            <h1>{title}<span class="span-{span}">.</span></h1>   
        </div>
    </div>
{:else if style == "3"}
	<!-- 2 Images -- Left Title -->
    <div class="section theme-{theme}">
        <div class="block half">
            <h1>{title}<span class="span-{span}">.</span></h1>   
        </div>
        <img class="quarter" alt="" src={images[0]} />
        <img class="quarter" alt="" src={images[1]} />
    </div>
{:else if style == "4"}
	<!-- 2 Images -- Right Title -->
    <div class="section theme-{theme}">
        <img class="quarter" alt="" src={images[0]} />
        <div class="block half">
            <h1>{title}<span class="span-{span}">.</span></h1>   
        </div>
        
        <img class="quarter" alt="" src={images[1]} />
    </div>
{:else if style == "5"}
	<!-- 3 Images -- Top Left Title -->
    <div class="section theme-{theme}">
        <div class="block quarter">
            <h1>{title}<span class="span-{span}">.</span></h1>   
        </div>
        <img class="quarter" alt="" src={images[0]} />
        <img class="quarter" alt="" src={images[1]} />
        <img class="quarter" alt="" src={images[2]} />
    </div>
{:else if style == "6"}
	<!-- 3 Images -- Top Right Title -->
    <div class="section theme-{theme}">
        <img class="quarter" alt="" src={images[0]} />
        <div class="block quarter">
            <h1>{title}<span class="span-{span}">.</span></h1>   
        </div>
        <img class="quarter" alt="" src={images[1]} />
        <img class="quarter" alt="" src={images[2]} />
    </div>
{:else if style == "7"}
	<!-- 3 Images -- Bottom Left Title -->
    <div class="section theme-{theme}">
        <img class="quarter" alt="" src={images[0]} />
        <img class="quarter" alt="" src={images[1]} />
        <div class="block quarter">
            <h1>{title}<span class="span-{span}">.</span></h1>   
        </div>
        <img class="quarter" alt="" src={images[2]} />
    </div>
{:else if style == "8"}
	<!-- 3 Images -- Bottom Right Title -->
    <div class="section theme-{theme}">
        <img class="quarter" alt="" src={images[0]} />
        <img class="quarter" alt="" src={images[1]} />
        <img class="quarter" alt="" src={images[2]} />
        <div class="block quarter">
            <h1>{title}<span class="span-{span}">.</span></h1>   
        </div>   
    </div>
{:else}
	<p>Error -- Unknown style</p>
{/if}

<style>
    .section {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 50% 50%; 
        height: 100vh;
        width: 100vw;
        padding: 0;
        margin: 0;
    }

    .span-none {
        display: none;
    }

    .theme-dark {
        background-color: #0d1117;
	    color: #ffffff;
    }

    .theme-light {
        background-color: #ffffff;
	    color: #0d1117;
    }
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover !important;
    }

    .block {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .quarter {
        grid-row: span 1;
        grid-column: span 1;
    }

    .half {
        grid-row: span 2;
        grid-column: span 1;
    }
</style>