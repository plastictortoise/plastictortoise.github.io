<script>
	import { createEventDispatcher } from 'svelte';

	let { photo } = $props();
	const dispatch = createEventDispatcher();

	let imageLoaded = $state(false);
	let imageError = $state(false);

	function handleBackdropClick(e) {
		if (e.target === e.currentTarget) {
			dispatch('close');
		}
	}

	function handleClose() {
		dispatch('close');
	}

	function handleNext() {
		dispatch('next');
	}

	function handlePrev() {
		dispatch('prev');
	}

	function handleKeydown(e) {
		if (e.key === 'Escape') {
			dispatch('close');
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="lightbox" onclick={handleBackdropClick} onkeypress={handleBackdropClick} tabindex="0" role="dialog" aria-modal="true" aria-label="Photo viewer">
	<button class="close-btn" onclick={handleClose} aria-label="Close lightbox">
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
			<line x1="18" y1="6" x2="6" y2="18"></line>
			<line x1="6" y1="6" x2="18" y2="18"></line>
		</svg>
	</button>

	<div class="nav-btn-container">
		<button class="nav-btn prev-btn" onclick={handlePrev} aria-label="Previous photo">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<polyline points="15 18 9 12 15 6"></polyline>
			</svg>
		</button>

		<button class="nav-btn next-btn" onclick={handleNext} aria-label="Next photo">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<polyline points="9 18 15 12 9 6"></polyline>
			</svg>
		</button>	
	</div>

	<div class="lightbox-content">
		{#if !imageLoaded && !imageError}
			<div class="loader">
				<div class="spinner"></div>
			</div>
		{/if}

		{#if imageError}
			<div class="error">Failed to load image</div>
		{:else}
			<img
				src={photo}
				alt={photo}
				class="lightbox-image"
				class:loaded={imageLoaded}
				onload={() => imageLoaded = true}
				onerror={() => imageError = true}
			/>
		{/if}
	</div>
</div>

<style>
	.lightbox {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: var(--lightbox-bg);
		backdrop-filter: blur(40px);
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		animation: fadeIn 0.1s ease-in-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.close-btn,
	.nav-btn {
		position: absolute;
		background: var(--bg-secondary);
		border: 1px solid var(--border);
		color: rgb(var(--text-primary));
		cursor: pointer;
		padding: 0.2rem;
		width: 44px;
		height: 44px;
		border-radius: 0.6em;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;
		backdrop-filter: blur(10px);
		z-index: 1001;
	}

	.nav-btn-container {
		position: absolute;
		height: 44px;
		width: 100%;
	}

	.close-btn:hover,
	.nav-btn:hover {
		background: var(--bg-hover);
		cursor: pointer;
	}

	.close-btn:active {
		transform: scale(0.90);
	}

	.nav-btn:active {
		transform: translateY(-50%) scale(0.90);
	}

	.close-btn {
		top: 2rem;
		right: 2rem;
	}

	.nav-btn {
		top: 50%;
		transform: translateY(-50%);
	}

	.prev-btn {
		left: 2rem;
	}

	.next-btn {
		right: 2rem;
	}

	.lightbox-content {
		position: relative;
		max-width: 90vw;
		max-height: 90vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.lightbox-image {
		max-width: 100%;
		max-height: 85vh;
		object-fit: contain;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.lightbox-image.loaded {
		transition: opacity 0.3s ease;
		opacity: 1;
	}

	.loader {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.spinner {
		width: 40px;
		height: 40px;
		border: 3px solid rgba(255, 255, 255, 0.2);
		border-top-color: #ffffff;
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	.error {
		color: rgba(255, 255, 255, 0.6);
		font-size: 1.1rem;
		text-align: center;
		padding: 2rem;
	}

	@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 768px) {
		.lightbox {
			padding: 1rem;
		}

		.close-btn {
			top: 1rem;
			right: 1rem;
			width: 40px;
			height: 40px;
		}

		.nav-btn {
			position: static !important;
			width: 120px;
			height: 40px;
		}

		.nav-btn-container {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 1rem;
			bottom: 1rem;
		}

		.lightbox-image {
			max-height: 80vh;
		}
	}
</style>