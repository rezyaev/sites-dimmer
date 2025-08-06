const OVERLAY_ID = "sites-dimmer-overlay";

main();

chrome.storage.onChanged.addListener(() => main());

async function main() {
	const storage = await import(chrome.runtime.getURL("lib/storage.js"));

	const activeUrls = await storage.getActiveUrls();
	const intensity = await storage.getIntensity();

	const url = new URL(location.href).hostname;
	const overlay = document.getElementById(OVERLAY_ID) || document.createElement("div");

	if (!activeUrls.includes(url)) {
		overlay.remove();
		return;
	}

	overlay.id = OVERLAY_ID;
	overlay.style = `
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 10000;
      pointer-events: none;
      background: black;
      opacity: 0.${intensity}
    `;

	document.body.append(overlay);
}
