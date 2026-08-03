import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function getInitialTheme() {
	if (!browser) return 'dark';
	
	// Check localStorage first
	const stored = localStorage.getItem('theme');
	if (stored === 'light' || stored === 'dark') {
		return stored;
	}
	
	// Fall back to system preference
	if (window.matchMedia('(prefers-color-scheme: light)').matches) {
		return 'light';
	}
	
	return 'dark';
}

function createThemeStore() {
	const { subscribe, set, update } = writable(getInitialTheme());

	return {
		subscribe,
		set: (theme) => {
			if (browser) {
				localStorage.setItem('theme', theme);
				document.documentElement.setAttribute('data-theme', theme);
			}
			set(theme);
		},
		toggle: () => {
			update((current) => {
				const newTheme = current === 'light' ? 'dark' : 'light';
				if (browser) {
					localStorage.setItem('theme', newTheme);
					document.documentElement.setAttribute('data-theme', newTheme);
				}
				return newTheme;
			});
		},
		init: () => {
			if (browser) {
				const theme = getInitialTheme();
				document.documentElement.setAttribute('data-theme', theme);
				
				// Listen for system theme changes
				const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
				const handleChange = (e) => {
					// Only update if user hasn't manually set a preference
					if (!localStorage.getItem('theme')) {
						const newTheme = e.matches ? 'light' : 'dark';
						set(newTheme);
						document.documentElement.setAttribute('data-theme', newTheme);
					}
				};
				
				mediaQuery.addEventListener('change', handleChange);
				return () => mediaQuery.removeEventListener('change', handleChange);
			}
		}
	};
}

export const theme = createThemeStore();