/* Download targets shared by the homepage button and the installing page.
   Links use the stable `releases/latest/download/` URLs so they never go stale
   between builds. */

export const latest = 'https://github.com/Taiko2k/Tauon/releases/latest/download/';

export const downloads = {
	windows: `${latest}TauonMusicBox-windows-installer.exe`,
	windowsPortable: `${latest}TauonMusicBox-windows.7z`,
	mac: `${latest}Tauon-signed.dmg`,
	flathub: 'https://flathub.org/apps/com.github.taiko2k.tauonmb',
};

export type Os = 'windows' | 'mac' | 'linux';

/* The visitor's platform, or null when it has no download of its own (iPad, Android). */
export function detectOs(): Os | null {
	const ua = navigator.userAgent;
	const touch = navigator.maxTouchPoints > 1;
	if (/Windows/.test(ua)) return 'windows';
	if (/Macintosh/.test(ua) && !touch) return 'mac';
	if (/Linux|X11/.test(ua) && !/Android/.test(ua)) return 'linux';
	return null;
}
