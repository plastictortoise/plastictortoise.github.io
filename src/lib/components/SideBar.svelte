<script>
    let { sections } = $props();

    function scroll(id) {
        let el = document.getElementById(id);
        el.scrollIntoView({block: 'start', behavior: 'smooth'});
    }
</script>

<div class="sidebar">
    <ul>
        {#each sections as section}
            <li><button type="button" onclick={() => {scroll(section.id)}}>{section.title}</button></li>
        {/each}
    </ul> 
</div>

<style>
    .sidebar {
        display: block;
        position: absolute;
        width: calc((100vw - 1400px) / 2);
        min-width: 190px;
        height: calc(100vh - 234.4px);
        top: 234.4px;
        padding: 2rem;
        overflow: hidden;
        mask-image: linear-gradient(to right, #fff 1%, #fff 50%, rgba(0, 0, 0, 0));
        mask-size: 200% 100%;
        z-index: 999;
    }

    button {
        display: block;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        background: none;
        border: none;
        padding: 0;
        text-decoration: none;
        color: inherit;
        white-space: nowrap;
        cursor: pointer;
        text-align: left;
        font-family: 'Playfair Display', serif;
        font-size: clamp(0.85rem, 2vw, 1.4rem);
        font-weight: 400;
        letter-spacing: -0.02em;
        color: rgba(var(--text-primary), 0.6);
        margin-bottom: 0.25rem;
    }

    button:hover {
        color: rgba(var(--text-primary), 1);
    }


    .sidebar:hover, .sidebar:focus {
        animation: clip-fade 0.3s forwards;
    }

    .sidebar:not(:hover), .sidebar:focus {
        animation: clip-unfade 0.3s forwards;
    }
    ul {
        list-style-type: none;
    }

    @keyframes clip-fade {
        0% {
            mask-position: right;
        }
        100% {
            mask-position: left;
        }
    }

    @keyframes clip-unfade {
        0% {
            mask-position: left;
        }
        100% {
            mask-position: right;
        }
    }

    @media screen and (max-width: 1600px) {
        .sidebar {
            display: none;
        }
    }
</style>