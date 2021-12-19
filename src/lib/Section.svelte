<script>
    export let title;
    export let content;
    export let style = "full";
    export let bg = "#ffffff";
    export let text = "#000000";
    export let subtext = text;
</script>

<div class="section section-{style}" style="color: {text}; background-color: {bg};">
    <div class="content">
        {#if title != null}
            <h1>{title}</h1>
        {/if}
        {#if content != null}
            <div style="color: {subtext}">{@html content}</div>
        {/if}
    </div>
</div>

<style>
    .section {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-size: cover !important;
        background-repeat: no-repeat !important;
        background-position: center !important;
    }

    .section-full {
        height: 100vh;
    }

    .section-tall {
        height: 75vh;
    }

    .section-half {
        height: 50vh;
    }

    .section-short {
        height: 25vh;
    }

    .section-seperator {
        height: 5vh;
    }

    @media screen and (max-width: 680px) {
        .section-full {
            text-align: center;
            font-size: 16px;
            padding: 40px;
        }
    }
</style>