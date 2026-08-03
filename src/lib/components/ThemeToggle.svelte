<script>
	import { theme } from '$lib/stores/theme.js';

	let currentTheme = $state('dark');
	
	$effect(() => {
		const unsubscribe = theme.subscribe((value) => {
			currentTheme = value;
		});
		return unsubscribe;
	});

	function toggleTheme() {
		theme.toggle();
	}
</script>

<button class="theme-toggle" onclick={toggleTheme} aria-label="Toggle theme">
	{#if currentTheme === 'light'}
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
		</svg>
	{:else}
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
			<circle cx="12" cy="12" r="5"></circle>
			<line x1="12" y1="1" x2="12" y2="3"></line>
			<line x1="12" y1="21" x2="12" y2="23"></line>
			<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
			<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
			<line x1="1" y1="12" x2="3" y2="12"></line>
			<line x1="21" y1="12" x2="23" y2="12"></line>
			<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
			<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
		</svg>
	{/if}
</button>

<style>
	.theme-toggle {
		position: fixed;
		top: 2rem;
		right: 2rem;
		background: var(--bg-secondary);
		border: 1px solid var(--border);
		color: rgb(var(--text-primary));
		cursor: pointer;
		padding: 0.75rem;
		width: 44px;
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;
		z-index: 100;
		backdrop-filter: blur(10px);
		border-radius: 0.6em;
	}

	.theme-toggle:hover {
		background: var(--bg-hover);
		transform: scale(1.05);
	}

	.theme-toggle:active {
		transform: scale(0.90);
	}

	@media (max-width: 768px) {
		.theme-toggle {
			top: 1rem;
			right: 1rem;
			width: 40px;
			height: 40px;
			padding: 0.625rem;
		}
	}
</style>