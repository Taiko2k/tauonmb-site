// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy'

// https://astro.build/config
export default defineConfig({
    site: 'https://tauonmusicbox.rocks',
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
					label: 'Overview',
					items: [
						{ label: 'Getting Started', slug: 'manual/overview' },
						{ label: 'Installing', slug: 'manual/installing' },
						{ label: 'FAQ', slug: 'manual/faq' },
					],
				},
				{
					label: 'Features',
					items: [
						{ label: 'Interface Overview', slug: 'manual/interface' },
						{ label: 'Gallery View', slug: 'manual/gallery' },
						{ label: 'Search & Find', slug: 'manual/search' },
						{ label: 'Mini Mode', slug: 'manual/mini-mode' },
						{ label: 'Download Importing', slug: 'manual/download-importing' },
						{ label: 'Smart Playlists', slug: 'manual/generators' },
						{ label: 'Spotify', slug: 'manual/spotify' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Keyboard Shortcuts', slug: 'manual/keyboard-shortcuts' },
					    { label: 'Gamepad Mappings', slug: 'manual/gamepad-mappings' },
						{ label: 'Themes', slug: 'manual/themes' },
						{ label: 'App Data', slug: 'manual/app-data' },
					],
				},
			],
		}),
	],
});
