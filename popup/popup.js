import { getActiveUrls, getIntensity, setActiveUrls, setIntensity } from "../lib/storage.js";
import { getCurrentUrl } from "../lib/url.js";

/** @type {HTMLInputElement} */
const activeCheckbox = document.querySelector("#active");

/** @type {HTMLInputElement} */
const intensityInput = document.querySelector("#intensity");

document.addEventListener("DOMContentLoaded", async () => {
	intensityInput.value = await getIntensity();

	const currentUrl = await getCurrentUrl();
	const activeUrls = await getActiveUrls();
	activeCheckbox.checked = activeUrls.includes(currentUrl);
});

intensityInput.addEventListener("change", async () => {
	await setIntensity(intensityInput.value);
});

activeCheckbox.addEventListener("change", async () => {
	const currentUrl = await getCurrentUrl();
	const activeUrls = await getActiveUrls();

	const updatedUrls = activeCheckbox.checked
		? [...activeUrls, currentUrl]
		: activeUrls.filter((url) => url !== currentUrl);

	await setActiveUrls(updatedUrls);
});
