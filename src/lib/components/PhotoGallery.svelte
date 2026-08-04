<script>
	import { createEventDispatcher, onMount } from 'svelte';

	let { photos = [] } = $props();
	const dispatch = createEventDispatcher();

	function getAverageColour(photo) {
		let lastSlashIndex = photo.lastIndexOf('/');
		let averageColour = `#${photo.slice(lastSlashIndex + 1, lastSlashIndex + 7)}`
		return averageColour;
	}

	function handlePhotoClick(photo) {
		dispatch("photo-click", photo);
	}

	onMount(() => {
		const intersectionCallback = (entries, observer) => {
			entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				observer.unobserve(entry.target);
			}
			});
		};

		const observer = new IntersectionObserver(intersectionCallback);
		const items = document.querySelectorAll('.photo-card');
		items.forEach(item => {
			observer.observe(item);
		});
	});	
</script>

<div class="gallery visible">
	{#each photos as src}
		<button
			class="photo-card"
			onclick={() => handlePhotoClick(src)}
		>
			<div class="photo-wrapper" style="background-color: {getAverageColour(src)}">
				<img
					src={src}
					alt={src}
					loading="lazy"
					class="photo"
				/>
			</div>
		</button>
	{/each}
</div>

<style>
	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1.5rem;
		padding: 0;
	}
 
	.photo-card {
		background: transparent;
		border: none;
		padding: 0;
		cursor: pointer;
		position: relative;
		overflow: hidden;
		aspect-ratio: 3/4;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		opacity: 0;
		transition: opacity 1s ease-out, transform 1s ease-out;
		transform: translateY(20px);
		border-radius: 0.6em;
	}

	.photo-card:hover {
		transform: translateY(-4px);
	}

	.photo-card:focus {
		outline: 2px solid rgba(255, 255, 255, 0.024);
		outline-offset: 4px;
	}

	.photo-wrapper {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
		background: rgba(255, 255, 255, 0.05);
	}

	.photo {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transform: scale(1.12);
		transition: transform 0.5s ease;
	}

	.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.photo-card:hover .photo {
		transform: scale(1.176);
	}

	@media (max-width: 768px) {
		.gallery {
			grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
			gap: 1rem;
		}
	}

	@media (max-width: 480px) {
		.gallery {
			grid-template-columns: repeat(2, 1fr);
			gap: 0.75rem;
		}
	}
</style>