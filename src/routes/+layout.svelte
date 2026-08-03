<script>
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme.js';

	let { children } = $props();

	onMount(() => {
		theme.init();
	});
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Caprasimo&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Newsreader:wght@400;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
</svelte:head>

<div class="app">
	{@render children()}
</div>

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(html, body) {
		height: 100%;
		width: 100%;
		overflow-x: hidden;
	}

	:global(html) {
		--bg-primary: 28, 26, 23;
		--bg-secondary: rgba(255, 255, 255, 0.1);
		--bg-hover: rgba(255, 255, 255, 0.15);
		--text-primary: 255, 255, 255;
		--text-secondary: #ffffff99;
		--border: rgba(255, 255, 255, 0.1);
		--lightbox-bg: rgba(17, 17, 17, 0.3);
		--sepia-text: #e5d1b8;
	}

	:global(html[data-theme='light']) {
		--bg-primary: 245, 243, 240;
		--bg-secondary: rgba(0, 0, 0, 0.08);
		--bg-hover: rgba(0, 0, 0, 0.12);
		--text-primary: 26, 26, 26;
		--text-secondary: rgba(0, 0, 0, 0.65);
		--border: rgba(0, 0, 0, 0.15);
		--lightbox-bg: rgba(245, 243, 240, 0.3);
		--sepia-text: #8b7355;
	}

	:global(body) {
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
		background-color: rgb(var(--bg-primary));
		color: rgb(var(--text-primary));
		line-height: 1.6;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		transition: background-color 0.3s ease, color 0.3s ease;
	}

	.app {
		min-height: 100vh;
		width: 100%;
	}
</style>
