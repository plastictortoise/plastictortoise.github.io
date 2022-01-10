<script>
    export let style = "half";
    export let bg;
    export let offset = 0;

    let offsetClass = offset.toString().split(".").join("-")

    import { onMount } from "svelte";

    onMount(() => {
        window.addEventListener('scroll', throttle(parallax, 8));
        function throttle(fn, wait) {
            let time = Date.now();
            return function() {
                if ((time + wait - Date.now()) < 0) {
                    fn();
                    time = Date.now();
                }
            }
        };
        function parallax() {
            let scrolled = window.pageYOffset - ((offset) * window.innerHeight);
            let parallax = document.querySelector(`.background-${offsetClass}`);
            let coords = scrolled * 0.4
            parallax.style.transform = 'translateY(' + coords + 'px)';
        };
    });
</script>

<div class="section section-{style}">
    <img class="background background-{offsetClass}" src="{bg}" alt="{bg}">
</div>

<style>
    .section, .background {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100vh;
        object-fit: cover !important;
        overflow: hidden;
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
</style>