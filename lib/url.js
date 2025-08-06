export async function getCurrentUrl() {
	const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	return new URL(tab.url).hostname;
}
