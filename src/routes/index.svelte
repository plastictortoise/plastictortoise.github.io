<script>
	import Cover from "$lib/Cover.svelte";
	import Footer from "$lib/Footer.svelte";
	import SectionTitle from "$lib/SectionTitle.svelte";
	import ImageSection from "$lib/ImageSection.svelte";
</script>

<svelte:head>
	<title>Travel Photography</title>
</svelte:head>

<Cover />

<SectionTitle title="Changa" image="changa/impala.jpg" />
<ImageSection title="December 2022" images={["changa/stars.jpg", "changa/bird.jpg"]} style="3" theme="light" />
<ImageSection title="" images={["changa/elephant.jpg", "changa/vulture.jpg"]} style="4" theme="dark" />

<SectionTitle title="Connemara" image="connemara/lakes.jpg" />
<ImageSection title="December 2022" images={["connemara/flower.jpg", "connemara/bird.jpg"]} style="4" theme="dark" />

<SectionTitle title="Mana Pools" image="mana-pools/landscape.jpg" />
<ImageSection title="September 2022" images={["mana-pools/elephant.jpg"]} style="1" theme="light" />

<SectionTitle title="Dubai" image="dubai/ceiling.jpg" />
<ImageSection title="August 2022" images={["dubai/desert.jpg", "dubai/burj.jpg"]} style="3" theme="dark" />
<ImageSection title="" images={["dubai/souk.jpg", "dubai/museum.jpg"]} style="4" theme="light" />

<SectionTitle title="Changa" image="changa/sunset.jpg" />
<ImageSection title="June 2022" images={["changa/heart.jpg"]} style="1" theme="dark" />

<SectionTitle title="Mauritius" image="mauritius/palms.jpg" />
<ImageSection title="April 2022" images={["mauritius/coral.jpg", "mauritius/sunset.jpg"]} style="4" theme="light" />

<SectionTitle title="Musango" image="musango/stumps.jpg" />
<ImageSection title="February 2022" images={["musango/lake.jpg", "musango/sunset.jpg"]} style="3" theme="dark" />

<SectionTitle title="South Africa" image="south-africa/creeper.jpg" />
<ImageSection title="December 2021" images={["south-africa/car.jpg", "south-africa/lighthouse.jpg", "south-africa/wall.jpg"]} style="6" theme="dark" />

<SectionTitle title="Nyanga & Gairesi" image="nyanga/cliff.jpg" />
<ImageSection title="December 2021" images={["nyanga/sunset.jpg", "nyanga/fire.jpg", "nyanga/river.jpg"]} style="7" theme="light" />

<SectionTitle title="Kariba" image="kariba/reflection.jpg" />
<ImageSection title="August 2021" images={["kariba/shrubs.jpg", "kariba/wood.jpg"]} style="3" theme="light" />

<SectionTitle title="Pamushana" image="pamushana/lake.jpg" />
<ImageSection title="June 2021" images={["pamushana/cave-paintings.jpg", "pamushana/sunrise.jpg"]} style="4" theme="dark" />

<Footer />