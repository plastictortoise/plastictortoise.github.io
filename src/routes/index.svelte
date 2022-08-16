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
	<title>Travel Photography</title>

	<script defer src="https://unpkg.com/imagesloaded@4.1.4/imagesloaded.pkgd.min.js"></script>
</svelte:head>

<div id="loading">
	<Loading />
</div>

<Section title="Travel Photography" content="<p>A collection of some of the best photographs from my travels.</p>" bg="#0d1117" text="#ffdf36" subtext="#ffffff" />

<Section title="Pamushana" style="short" content="<p>June 2021</p>" />
<ImageSection offset="1.25" style="half" bg="pamushana/sunrise.jpg" />
<Section style="seperator" />
<ImageSection offset="1.8" style="short" bg="pamushana/cave-paintings.jpg" />
<Section style="seperator" />
<ImageSection offset="2.1" style="half" bg="pamushana/lake.jpg" />

<Section title="Kariba" style="short" content="<p>August 2021</p>" />
<ImageSection offset="2.85" style="half" bg="kariba/shrubs.jpg" />
<Section style="seperator" />
<ImageSection offset="3.4" style="tall" bg="kariba/reflection.jpg" />
<Section style="seperator" />
<ImageSection offset="4.2" style="short" bg="kariba/wood.jpg" />

<Section title="Nyanga & Gairesi" style="short" content="<p>December 2021</p>" />
<ImageSection offset="4.7" style="tall" bg="nyanga/sunset.jpg" />
<Section style="seperator" />
<ImageSection offset="5.5" style="short" bg="nyanga/cliff.jpg" />
<Section style="seperator" />
<ImageSection offset="5.8" style="half" bg="nyanga/fire.jpg" />
<Section style="seperator" />
<ImageSection offset="6.35" style="full" bg="nyanga/river.jpg" />

<Section title="South Africa" style="short" content="<p>December 2021</p>" />
<ImageSection offset="7.6" style="half" bg="south-africa/car.jpg" />
<Section style="seperator" />
<ImageSection offset="8.15" style="short" bg="south-africa/wall.jpg" />
<Section style="seperator" />
<ImageSection offset="8.45" style="tall" bg="south-africa/creeper.jpg" />
<Section style="seperator" />
<ImageSection offset="9.25" style="tall" bg="south-africa/lighthouse.jpg" />

<Section title="Musango" style="short" content="<p>February 2022</p>" />
<ImageSection offset="10.25" style="half" bg="musango/lake.jpg" />
<Section style="seperator" />
<ImageSection offset="10.8" style="tall" bg="musango/sunset.jpg" />
<Section style="seperator" />
<ImageSection offset="11.6" style="half" bg="musango/stumps.jpg" />

<Section title="Mauritius" style="short" content="<p>April 2022</p>" />
<ImageSection offset="12.35" style="half" bg="mauritius/palms.jpg" />
<Section style="seperator" />
<ImageSection offset="12.9" style="short" bg="mauritius/coral.jpg" />
<Section style="seperator" />
<ImageSection offset="13.2" style="half" bg="mauritius/stars.jpg" />
<Section style="seperator" />
<ImageSection offset="13.75" style="full" bg="mauritius/sunset.jpg" />

<Section title="Changa" style="short" content="<p>June 2022</p>" />
<ImageSection offset="15" style="tall" bg="changa/sunset.jpg" />
<Section style="seperator" />
<ImageSection offset="15.8" style="full" bg="changa/heart.jpg" />

<Section title="Dubai" style="short" content="<p>August 2022</p>" />
<ImageSection offset="17.05" style="short" bg="dubai/ceiling.jpg" />
<Section style="seperator" />
<ImageSection offset="17.35" style="tall" bg="dubai/desert.jpg" />
<Section style="seperator" />
<ImageSection offset="18.15" style="tall" bg="dubai/burj.jpg" />
<Section style="seperator" />
<ImageSection offset="18.95" style="half" bg="dubai/souk.jpg" />
<Section style="seperator" />
<ImageSection offset="19.5" style="full" bg="dubai/museum.jpg" />