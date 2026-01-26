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
					label: 'User Interface',
					items: [
						{ label: 'Main Panels', slug: 'manual/interface' },
						{ label: 'Artist List', slug: 'manual/artist-list' },
						{ label: 'Gallery View', slug: 'manual/gallery' },
						{ label: 'Folder Navigator', slug: 'manual/folder-navigator' },
					],
				},
				{
					label: 'Features',
					items: [
						{ label: 'Search & Find', slug: 'manual/search' },
						{ label: 'Folder Management', slug: 'manual/folder-management' },
						{ label: 'Lyrics', slug: 'manual/lyrics' },
						{ label: 'Lyrics Editor', slug: 'manual/lyrics-editor' },
						{ label: 'Tag Editor', slug: 'manual/tag-editor' },
						{ label: 'Mini Mode', slug: 'manual/mini-mode' },
						{ label: 'Playlist Export/Import', slug: 'manual/playlist-export' },
						{ label: 'Download Importing', slug: 'manual/download-importing' },
						{ label: 'Smart Playlists', slug: 'manual/generators' },
						{ label: 'Transcoding & Sync', slug: 'manual/transcoding' },
						{ label: 'Network Sources', slug: 'manual/network-sources' },
						{ label: 'Spotify', slug: 'manual/spotify' },
						{ label: 'Jellyfin', slug: 'manual/jellyfin' },
						{ label: 'Chromecast', slug: 'manual/chromecast' },
						{ label: 'Discord', slug: 'manual/discord' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Tips & Tricks', slug: 'manual/tips-tricks' },
						{ label: 'Keyboard Shortcuts', slug: 'manual/keyboard-shortcuts' },
						{ label: 'Menu Functions', slug: 'manual/menu-functions' },
					    { label: 'Gamepad Mappings', slug: 'manual/gamepad-mappings' },
						{ label: 'Themes', slug: 'manual/themes' },
						{ label: 'App Data & Playcounts', slug: 'manual/app-data' },
					],
				},
			],
		}),
	],
});
