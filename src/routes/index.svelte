<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from "svelte";
	import Section from "$lib/Section.svelte";
	import Loading from "$lib/Loading.svelte";
	import ImageSection from "$lib/ImageSection.svelte";

	onMount(() => {
		imagesLoaded( 'body', { background: true }, () => {
			document.querySelector("#loading").style.display = "none";
		});
	});
</script>

<svelte:head>
	<title>Benji</title>

	<script src="https://unpkg.com/imagesloaded@4.1.4/imagesloaded.pkgd.min.js"></script>
</svelte:head>

<div id="loading">
	<Loading />
</div>

<Section title="Hey, I'm Benji." content="<p>A computer entusiast from Zimbabwe who enjoys playing football and the ukulele.</p><p>This website is a collection of photos from my travels around Southern Africa.</p>" bg="#0d1117" text="#ffdf36" subtext="#ffffff" />

<Section title="Pamushana" style="short" />
<ImageSection offset="1.25" style="half" bg="pamushana/sunrise.jpg" />
<Section style="seperator" />
<ImageSection offset="1.8" style="short" bg="pamushana/cave-paintings.jpg" />
<Section style="seperator" />
<ImageSection offset="2.1" style="half" bg="pamushana/lake.jpg" />

<Section title="Kariba" style="short" />
<ImageSection offset="2.85" style="half" bg="kariba/shrubs.jpg" />
<Section style="seperator" />
<ImageSection offset="3.4" style="tall" bg="kariba/reflection.jpg" />
<Section style="seperator" />
<ImageSection offset="4.2" style="short" bg="kariba/wood.jpg" />

<Section title="Nyanga & Gairesi" style="short" />
<ImageSection offset="4.7" style="tall" bg="nyanga/sunset.jpg" />
<Section style="seperator" />
<ImageSection offset="5.5" style="short" bg="nyanga/cliff.jpg" />
<Section style="seperator" />
<ImageSection offset="5.8" style="half" bg="nyanga/fire.jpg" />
<Section style="seperator" />
<ImageSection offset="6.35" style="full" bg="nyanga/river.jpg" />