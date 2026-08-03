<svelte:head>
	<title>Plastic Tortoise Photography</title>
</svelte:head>

<script>
	import { onMount } from 'svelte';
	import PhotoGallery from '$lib/components/PhotoGallery.svelte';
	import PhotoLightbox from '$lib/components/PhotoLightbox.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import SideBar from '$lib/components/SideBar.svelte';

	let selectedPhoto = $state(null);
	let isLightboxOpen = $state(false);

	function getPhotos(directory) {
		let dir = [];

		switch (directory) {
			case "paris-2026":
				dir = import.meta.glob(
					"$lib/assets/paris-2026/*.{jpg,jpeg}",
					{ eager: true, query: "?url", import: "default"}
				);
				break;
			case "bruges-2026":
				dir = import.meta.glob(
					"$lib/assets/bruges-2026/*.{jpg,jpeg}",
					{ eager: true, query: "?url", import: "default"}
				);
				break;
			case "netherlands-2026":
				dir = import.meta.glob(
					"$lib/assets/netherlands-2026/*.{jpg,jpeg}",
					{ eager: true, query: "?url", import: "default"}
				);
				break;
			case "ballito-2025":
				dir = import.meta.glob(
					"$lib/assets/ballito-2025/*.{jpg,jpeg}",
					{ eager: true, query: "?url", import: "default"}
				);
				break;
			case "milan-2025":
				dir = import.meta.glob(
					"$lib/assets/milan-2025/*.{jpg,jpeg}",
					{ eager: true, query: "?url", import: "default"}
				);
				break;
			case "livigno-2025":
				dir = import.meta.glob(
					"$lib/assets/livigno-2025/*.{jpg,jpeg}",
					{ eager: true, query: "?url", import: "default"}
				);
				break;
			case "western-cape-2025":
				dir = import.meta.glob(
					"$lib/assets/western-cape-2025/*.{jpg,jpeg}",
					{ eager: true, query: "?url", import: "default"}
				);
				break;
			case "vanuatu-2026":
				dir = import.meta.glob(
					"$lib/assets/vanuatu-2026/*.{jpg,jpeg}",
					{ eager: true, query: "?url", import: "default"}
				);
				break;
			case "kalgoorlie-2026":
				dir = import.meta.glob(
					"$lib/assets/kalgoorlie-2026/*.{jpg,jpeg}",
					{ eager: true, query: "?url", import: "default"}
				);
				break;
			case "perth-2026":
				dir = import.meta.glob(
					"$lib/assets/perth-2026/*.{jpg,jpeg}",
					{ eager: true, query: "?url", import: "default"}
				);
				break;
		}
		

		return Object.values(dir);
	}

	console.log()
	

	// Photo sections for different trips and locations
	const sections = [
		{
			id: "perth-2026",
			title: "Perth",
			subtitle: "February 2026 - Current",
			photos: getPhotos("perth-2026")
		},
		{
			id: "kalgoorlie-2026",
			title: "Kalgoorlie",
			subtitle: "May 2026",
			photos: getPhotos("kalgoorlie-2026")
		},
		{
			id: "vanuatu-2026",
			title: "Vanuatu",
			subtitle: "April 2026",
			photos: getPhotos("vanuatu-2026")
		},
		{
			id: "paris-2026",
			title: "Paris",
			subtitle: "January 2026",
			photos: getPhotos("paris-2026")
		},
		{
			id: "bruges-2026",
			title: "Bruges",
			subtitle: "January 2026",
			photos: getPhotos("bruges-2026")
		},
		{
			id: "netherlands-2026",
			title: "The Netherlands",
			subtitle: "January 2026",
			photos: getPhotos("netherlands-2026")
		},
		{
			id: "ballito-2026",
			title: "Ballito",
			subtitle: "December 2025",
			photos: getPhotos("ballito-2025")
		},
		{
			id: "milan-2025",
			title: "Milan",
			subtitle: "December 2025",
			photos: getPhotos("milan-2025")
		},
		{
			id: "livigno-2025",
			title: "Livigno",
			subtitle: "December 2025",
			photos: getPhotos("livigno-2025")
		},
		{
			id: "western-cape-2025",
			title: "Western Cape",
			subtitle: "December 2025",
			photos: getPhotos("western-cape-2025")
		}
	];

	// Flatten all photos for lightbox navigation
	const allPhotos = $derived(sections.flatMap(section => section.photos));

	function openLightbox(photo) {
		selectedPhoto = photo;
		isLightboxOpen = true;
		document.body.style.overflow = 'hidden';
	}

	function closeLightbox() {
		isLightboxOpen = false;
		selectedPhoto = null;
		document.body.style.overflow = '';
	}

	function navigatePhoto(direction) {
		if (!selectedPhoto) return;
		
		const currentIndex = allPhotos.findIndex(p => p === selectedPhoto);
		let newIndex;
		
		if (direction === 'next') {
			newIndex = (currentIndex + 1) % allPhotos.length;
		} else {
			newIndex = (currentIndex - 1 + allPhotos.length) % allPhotos.length;
		}
		
		selectedPhoto = allPhotos[newIndex];
	}

	function scrollToContent() {
		const main = document.querySelector('.main');
		if (main) {
			main.scrollIntoView({ behavior: 'smooth' });
		}
	}

	// Keyboard navigation
	onMount(() => {
		function handleKeydown(e) {
			if (!isLightboxOpen) return;
			
			if (e.key === 'Escape') {
				closeLightbox();
			} else if (e.key === 'ArrowRight') {
				navigatePhoto('next');
			} else if (e.key === 'ArrowLeft') {
				navigatePhoto('prev');
			}
		}

		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});
</script>

<ThemeToggle />

<SideBar sections={sections} />

<div class="header">
	<div class="header-content">
		<h1>Plastic Tortoise Photography</h1>
		<h3 class="section-subtitle">Postcards from my travels</h3>	
	</div>
</div>

<main class="main">
	{#each sections as section (section.id)}
		<section id={section.id} class="photo-section">
			<div class="section-header">
				<h2 class="section-title">{section.title}</h2>
				{#if section.subtitle}
					<p class="section-subtitle">{section.subtitle}</p>
				{/if}
			</div>
			<PhotoGallery photos={section.photos} on:photo-click={(e) => openLightbox(e.detail)} />
		</section>
	{/each}
</main>

<div class="footer">
	<h4 class="section-subtitle">Proudly made in Zimbabwe</h4>
</div>

{#if isLightboxOpen && selectedPhoto}
	<PhotoLightbox
		photo={selectedPhoto}
		on:close={closeLightbox}
		on:next={() => navigatePhoto('next')}
		on:prev={() => navigatePhoto('prev')}
	/>
{/if}

<style>
	.main, .header-content, .footer {
		padding: 2rem 4rem;
		max-width: 1400px;
		margin: 0 auto;
	}

	.header {
		padding: 2rem 0;
		background-color: rgba(219, 197, 163, 0.277);
	}

	.footer {
		text-align: center;
		opacity: 0.5;
	}

	h1, h2 {
		font-family: 'Playfair Display', 'Times New Roman', Times, serif;
	}

	h1 {
		font-size: clamp(1.8rem, 6vw, 3rem);
		font-weight: 800;
		letter-spacing: -0.02em;
		margin-bottom: 0.25rem;
		color: var(rgb(--text-primary));
	}

	.photo-section {
		margin-bottom: 5rem;
	}

	.photo-section:last-child {
		margin-bottom: 0;
	}

	.section-header {
		margin-bottom: 2.5rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--border);
	}

	.section-title {
		font-size: clamp(1.5rem, 4vw, 2.5rem);
		font-weight: 400;
		letter-spacing: -0.02em;
		margin-bottom: 0.25rem;
		color: var(rgb(--text-primary));
	}

	.section-subtitle {
		font-size: clamp(0.85rem, 2vw, 1rem);
		font-weight: 300;
		color: var(--text-secondary);
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.photo-section {
		margin-bottom: 5rem;
	}

	.photo-section:last-child {
		margin-bottom: 0;
	}

	.section-header {
		margin-bottom: 2.5rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--border);
	}

	.section-title {
		font-size: clamp(1.5rem, 4vw, 2.5rem);
		font-weight: 400;
		letter-spacing: -0.02em;
		margin-bottom: 0.25rem;
		color: var(rgb(--text-primary));
	}

	.section-subtitle {
		font-size: clamp(0.85rem, 2vw, 1rem);
		font-weight: 300;
		color: var(--text-secondary);
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	@media (max-width: 768px) {
		.main, .header-content {
			padding: 2rem;
		}

		.photo-section {
			margin-bottom: 3.5rem;
		}

		.section-header {
			margin-bottom: 1.5rem;
		}
	}
</style>