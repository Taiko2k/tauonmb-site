// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeGalaxy()],
			title: 'Tauon',
			logo: {src: './src/assets/tauon.svg',
				    replacesTitle: true
			},
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Taiko2k/Tauon' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/v4EmhES' }
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Overview', slug: 'guides/overview' },
						{ label: 'Installing', slug: 'guides/installing' },
						{ label: 'FAQ', slug: 'guides/faq' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Interface Overview', slug: 'guides/interface' },
						{ label: 'Gallery View', slug: 'guides/gallery' },
						{ label: 'Search & Find', slug: 'guides/search' },
						{ label: 'Mini Mode', slug: 'guides/mini-mode' },
						{ label: 'Download Importing', slug: 'guides/download-importing' },
						{ label: 'Smart Playlists', slug: 'guides/generators' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Keyboard Shortcuts', slug: 'reference/keyboard-shortcuts' },
						{ label: 'Themes', slug: 'reference/themes' },
						{ label: 'Advanced Features', slug: 'reference/advanced' },
					],
				},
			],
		}),
	],
});
