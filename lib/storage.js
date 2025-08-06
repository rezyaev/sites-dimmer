const DEFAULT_INTENSITY = 50;
const DEFAULT_ACTIVE_URLS = [];

export async function getActiveUrls() {
	const { activeUrls } = await chrome.storage.local.get("activeUrls");
	return activeUrls || DEFAULT_ACTIVE_URLS;
}

export async function setActiveUrls(activeUrls) {
	await chrome.storage.local.set({ activeUrls });
}

export async function getIntensity() {
	const { intensity } = await chrome.storage.local.get("intensity");
	return intensity || DEFAULT_INTENSITY;
}

export async function setIntensity(intensity) {
	await chrome.storage.local.set({ intensity });
}
